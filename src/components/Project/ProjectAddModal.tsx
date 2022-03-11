import { Form, Modal } from 'antd';
import { useCallback, useState } from 'react';
import ProjectAddForm from './ProjectAddForm';

export type AddProjectType = {
  visible: boolean;
  setIsModalVisible: (input: boolean) => void;
};

const ProjectAddModal = ({ visible, setIsModalVisible }: AddProjectType) => {
  const [form] = Form.useForm();
  const onCancel = useCallback(() => {
    setIsModalVisible(false);
    form.resetFields();
  }, []);

  return (
    <>
      <Modal visible={visible} onCancel={onCancel} title="프로젝트 생성" footer={null}>
        <ProjectAddForm visible={visible} setIsModalVisible={setIsModalVisible} />
      </Modal>
    </>
  );
};
export default ProjectAddModal;
