import React from "react";
import { Wrapper } from "./Button.styled";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  UploadOutlined,
  LoadingOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Button = ({
  title,
  onClick,
  className,
  AddIcon,
  Icon,
  MinusIcon,
  loading,
  htmlType,
  style,
  disabled,
  filterIcon,
  type,
  shape,
}) => {
  return (
    <Wrapper
      className={className}
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
      style={style}
      disabled={disabled}
      type={type}
      shape={shape}
    >
      {AddIcon && (
        <div className="addIcon">
          <a>
            <PlusCircleOutlined style={{}} />
          </a>
        </div>
      )}
      {filterIcon && (
        <div className="filter-icon">
          <a>
            <FilterOutlined
              style={{
                verticalAlign: "text-top",
                color: "#000",
                paddingRight: "4px",
                fontSize: "20px",
              }}
            />
          </a>
        </div>
      )}
      {Icon && (
        <div className="addIcon" style={{}}>
          <a>
            <UploadOutlined style={{ fontSize: "20px",color:"#fff" }} />
          </a>
        </div>
      )}
      {MinusIcon && (
        <div className="minusIcon">
          <a>
            <MinusCircleOutlined style={{ verticalAlign: "text-top" }} />
          </a>
        </div>
      )}
      {title}
    </Wrapper>
  );
};
