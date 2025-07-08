"use client";

import React from "react";
import styled from "styled-components";
import { Table } from "antd";

const TableWrapper = styled.div`
  margin-top: 2rem;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #343a40;
  }
`;

interface PropData {
  key: string;
  property: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  data: PropData[];
}

const columns = [
  {
    title: "Property",
    dataIndex: "property",
    key: "property",
    render: (text: string) => <code>{text}</code>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text: string) => <span style={{ color: "#c41d7f" }}>{text}</span>,
  },
  {
    title: "Default",
    dataIndex: "default",
    key: "default",
    render: (text: string) => (text ? <code>{text}</code> : "-"),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <StyledTable columns={columns} dataSource={data} pagination={false} />
    </TableWrapper>
  );
};

export default PropsTable;
