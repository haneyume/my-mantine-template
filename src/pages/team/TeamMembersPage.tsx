import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Stack, Group, ActionIcon, Title, Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { DataTable, type DataTableSortStatus } from 'mantine-datatable';

import { IconPlus, IconEye, IconEdit, IconTrash } from '@tabler/icons-react';

import { InviteTeamMember, EditTeamMember } from '@/components';

import { useGetTeamMembersQuery } from '@/app-redux';

export const TeamMembersPage: FC = () => {
  const { t: tr } = useTranslation();

  const { teamId = '' } = useParams();

  const PAGE_SIZE = 50;
  const [page, setPage] = useState<number>(1);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
    columnAccessor: 'id',
    direction: 'asc',
  });
  const [selectedRecords, setSelectedRecords] = useState<any[]>([]);

  const { data: teamMembers } = useGetTeamMembersQuery({ teamId });

  const totalRecords = teamMembers?.total || 0;
  const displayData = (teamMembers?.data || []).slice(
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
            onClick={() => {
              modals.open({
                title: 'Edit member',
                children: (
                  <EditTeamMember
                    onSubmitForm={(values) => {
                      console.log('values', values);

                      modals.closeAll();
                    }}
                  />
                ),
              });
            }}
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon
            size="sm"
            variant="subtle"
            color="red"
            onClick={() => {
              modals.openConfirmModal({
                title: 'Please confirm your action',
                children: (
                  <Text size="sm">
                    {tr(
                      'Are you sure you want to delete this member? This action is irreversible and will delete all the data associated with this project.',
                    )}
                  </Text>
                ),
                labels: { confirm: tr('Confirm'), cancel: tr('Cancel') },
                confirmProps: { color: 'red' },
                onCancel: () => {},
                onConfirm: () => {},
              });
            }}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  return (
    <Stack p="md">
      <Group justify="space-between">
        <Title order={3}>{tr('Members')}</Title>

        <div className="flex-1" />

        <Button
          leftSection={<IconPlus size={18} />}
          onClick={() => {
            modals.open({
              title: 'Invite member',
              children: (
                <InviteTeamMember
                  onSubmitForm={(values) => {
                    console.log('values', values);

                    modals.closeAll();
                  }}
                />
              ),
            });
          }}
        >
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
