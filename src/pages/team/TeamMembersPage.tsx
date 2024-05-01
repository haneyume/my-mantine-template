import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useParams } from 'react-router-dom';

import { Stack, Group, ActionIcon, Title, Button } from '@mantine/core';
import { DataTable, type DataTableSortStatus } from 'mantine-datatable';

import { IconPlus, IconEye, IconEdit, IconTrash } from '@tabler/icons-react';

import { useGetTeamMembersQuery } from '@/app-redux';

export const TeamMembersPage: FC = () => {
  const { t: tr } = useTranslation();

  // const { teamId = '' } = useParams();

  const PAGE_SIZE = 50;
  const [page, setPage] = useState<number>(1);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
    columnAccessor: 'id',
    direction: 'asc',
  });
  const [selectedRecords, setSelectedRecords] = useState<any[]>([]);

  const { data: teamMembers } = useGetTeamMembersQuery();

  const totalRecords = teamMembers?.length || 0;
  const displayData = (teamMembers || []).slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const columns: any[] = [
    // {
    //   accessor: 'id',
    //   title: '#',
    //   textAlign: 'right',
    //   noWrap: true,
    //   sortable: true,
    // },
    {
      accessor: 'user.avatar',
      noWrap: true,
      sortable: true,
    },
    {
      accessor: 'user.email',
      noWrap: true,
      sortable: true,
    },
    {
      accessor: 'user.nickname',
      noWrap: true,
      sortable: true,
    },
    {
      accessor: 'role',
      noWrap: true,
      sortable: true,
    },
    {
      accessor: 'created_at',
      noWrap: true,
      sortable: true,
    },
    {
      accessor: 'actions',
      title: <div>Actions</div>,
      width: '0%',
      render: () => (
        <Group gap={4} wrap="nowrap">
          <ActionIcon
            size="sm"
            variant="subtle"
            color="green"
            // onClick={() => showModal({ company, action: 'view' })}
          >
            <IconEye size={16} />
          </ActionIcon>
          <ActionIcon
            size="sm"
            variant="subtle"
            color="blue"
            // onClick={() => showModal({ company, action: 'edit' })}
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon
            size="sm"
            variant="subtle"
            color="red"
            // onClick={() => showModal({ company, action: 'delete' })}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>{tr('Members')}</Title>

        <div className="flex-1" />

        <Button leftSection={<IconPlus size={18} />} onClick={() => {}}>
          {tr('Invite member')}
        </Button>
      </Group>

      <DataTable
        // style={{ height: '100vh' }}
        withTableBorder
        withColumnBorders
        borderRadius="md"
        striped
        highlightOnHover
        // pinFirstColumn
        pinLastColumn
        verticalAlign="top"
        columns={columns}
        records={displayData}
        page={page}
        onPageChange={setPage}
        totalRecords={totalRecords}
        recordsPerPage={PAGE_SIZE}
        sortStatus={sortStatus}
        onSortStatusChange={(status) => {
          setPage(1);
          setSortStatus(status);
        }}
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
        onRowClick={({ record }) => {
          console.log('record', record);
          // showNotification({
          //   title: `Clicked on ${record.nickname}`,
          //   message: `You clicked on ${record.nickname}`,
          //   withBorder: true,
          // })
        }}
      />
    </Stack>
  );
};
