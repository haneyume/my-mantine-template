import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { type SupabaseClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { IconApiApp } from '@tabler/icons-react';

interface LoginPageProps {
  supabaseClient: SupabaseClient;
}

export const LoginPage: FC<LoginPageProps> = ({ supabaseClient }) => {
  const { t: tr } = useTranslation();

  // const [refetchGroup] = useRefetchGroupMutation();

  useEffect(() => {
    // refetchGroup();

    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex items-center mb-10">
        <IconApiApp color="white" size={40} />
        <h1 className="text-3xl text-white font-bold ml-5">Login</h1>
      </div>

      <div className="w-72">
        <Auth
          supabaseClient={supabaseClient}
          theme="dark"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#1569C7',
                  brandAccent: '#0041C2',
                },
              },
            },
          }}
          providers={
            [
              // 'azure'
            ]
          }
          // onlyThirdPartyProviders
          localization={{
            variables: {
              sign_up: {
                email_label: tr('Email address'),
                password_label: tr('Create a Password'),
                email_input_placeholder: tr('Your email address'),
                password_input_placeholder: tr('Your password'),
                button_label: tr('Sign up'),
                loading_button_label: tr('Signing up...'),
                social_provider_text: tr('Sign in with {{provider}}'),
                link_text: tr("Don't have an account? Sign up"),
                confirmation_text: tr(
                  'Check your email for the confirmation link',
                ),
              },
              sign_in: {
                email_label: tr('Email address'),
                password_label: tr('Your password'),
                email_input_placeholder: tr('Your email address'),
                password_input_placeholder: tr('Your password'),
                button_label: tr('Sign in'),
                loading_button_label: tr('Signing in...'),
                social_provider_text: tr('Sign in with {{provider}}'),
                link_text: tr('Already have an account? Sign in'),
              },
              magic_link: {
                email_input_label: tr('Email address'),
                email_input_placeholder: tr('Your email address'),
                button_label: tr('Sign in'),
                loading_button_label: tr('Signing in...'),
                link_text: tr('Already have an account? Sign in'),
                confirmation_text: tr('Check your email for the magic link'),
              },
              forgotten_password: {
                email_label: tr('Email address'),
                password_label: tr('Your password'),
                email_input_placeholder: tr('Your email address'),
                button_label: tr('Send reset password instructions'),
                loading_button_label: tr('Sending reset instructions ...'),
                link_text: tr('Forgot your password?'),
                confirmation_text: tr(
                  'Check your email for the password reset link',
                ),
              },
              update_password: {
                password_label: tr('New password'),
                password_input_placeholder: tr('Your new password'),
                button_label: tr('Update password'),
                loading_button_label: tr('Updating password ...'),
                confirmation_text: tr('Your password has been updated'),
              },
              verify_otp: {
                email_input_label: tr('Email address'),
                email_input_placeholder: tr('Your email address'),
                phone_input_label: tr('Phone number'),
                phone_input_placeholder: tr('Your phone number'),
                token_input_label: tr('Token'),
                token_input_placeholder: tr('Your Otp token'),
                button_label: tr('Verify token'),
                loading_button_label: tr('Signing in ...'),
              },
            },
          }}
        />
      </div>
    </div>
  );
};
