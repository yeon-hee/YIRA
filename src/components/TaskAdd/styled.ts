import styled from '@emotion/styled';
import { Modal, Button } from 'antd';

export const ButtonSection = styled(Button)`
  background: #0052cc;
  color: white;
  border: none;
`;

export const ModalSection = styled(Modal)`
  .ant-modal-header {
    padding: 24px;
  }
  .ant-modal-title {
    font-size: 20px;
  }
  .ant-form-item-label {
    padding: 0px;
  }
  .ant-form-item-no-colon {
    color: var(--ds-text-lowEmphasis, var(--ds-text-lowEmphasis, #6b778c));
  }
  .ant-btn-lg {
    color: var(--ds-text-link-resting, #0052cc) !important;
    height: 0;
  }
`;
