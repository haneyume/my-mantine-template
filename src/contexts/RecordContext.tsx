import { useState, ReactNode, createContext } from 'react';

import axios from 'axios';

let stream: MediaStream | null = null;
let mediaRecorder: MediaRecorder | null = null;

const initMediaStream = async () => {
  return await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
};

export interface RecordContextProps {
  recordingId: string;
  setRecordingId: React.Dispatch<React.SetStateAction<string>>;

  onRecord: (id: string, onCallback?: (text: string) => void) => Promise<void>;
  onStop: () => Promise<void>;
}

export const RecordContext = createContext<RecordContextProps>(undefined!);

export interface RecordProviderProps {
  children: ReactNode;
}

export const RecordProvider = ({ children }: RecordProviderProps) => {
  const [recordingId, setRecordingId] = useState<string>('');

  const onRecord = async (id: string, onCallback?: (text: string) => void) => {
    if (!stream) {
      stream = await initMediaStream();
    }

    if (!mediaRecorder) {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.start();

      let chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        chunks = [];

        //

        // const audioURL = window.URL.createObjectURL(blob);
        // const audio = new Audio(audioURL);
        // audio.play();

        //

        const file = new File([blob], 'record.webm', { type: 'audio/webm' });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('model', 'whisper-1');

        const openaiApiKey = window.localStorage.getItem('openaiApiKey') || '';

        axios
          .post('https://api.openai.com/v1/audio/transcriptions', formData, {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            if (onCallback) {
              onCallback(res.data.text);
            }
          });
      };
    }

    setRecordingId(id);
  };

  const onStop = async () => {
    mediaRecorder?.stop();
    mediaRecorder = null;

    stream?.getTracks().forEach((track) => track.stop());
    stream = null;

    setRecordingId('');
  };

  return (
    <RecordContext.Provider
      value={{
        recordingId,
        setRecordingId,

        onRecord,
        onStop,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
