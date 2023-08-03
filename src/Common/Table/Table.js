import React from "react";
import { Wrapper,  } from "./Table.styled";
import { Button } from "antd";

export const Table = ({
  dataSource,
  columns,
  pagination,
  onChange,
  loading,
  title,
  className,
}) => {
  return (
    <>
     
      <Wrapper
      title={title}
        className={className}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        onChange={onChange}
        loading={loading}
        // scroll={{ x: 'max-content' }}
      />
    </>
  );
};
