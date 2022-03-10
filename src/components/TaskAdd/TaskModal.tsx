import React, { useCallback, useEffect, useState } from 'react';
import { ModalSection } from './styled';
import { Form, Select, Divider, Input, Button, Modal } from 'antd';
import { CheckSquareTwoTone, BulbTwoTone } from '@ant-design/icons';
import TextEditor from './TextEditor';
import { useDispatch } from 'react-redux';
import { addTaskRequest } from '@src/reducers/task/addTask';
import { useRootState } from '@src/hooks/useRootState';
const { Option, OptGroup } = Select;

const dummyProject = [
  { id: 1, title: 'YIRA' },
  { id: 2, title: 'HEY_NANA' },
  { id: 3, title: 'BUTTER_YUM' },
];

interface TaskModalProps {
  visible: boolean;
  setIsModalVisible: (input: boolean) => void;
}

const TaskModal = ({ visible, setIsModalVisible }: TaskModalProps) => {
  const [form] = Form.useForm();
  const [projectId, setProjectId] = useState<number>(0);
  const [taskType, setTaskType] = useState<string>('task');
  const [summary, setSummary] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [manager, setManager] = useState<string>('');
  const [inputValid, setInputValid] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { task, isLoading } = useRootState((state) => state.task);

  const onChangeProject = useCallback((value) => {
    setProjectId(value);
  }, []);

  const onChangeSummary = useCallback((e) => {
    setSummary(e.target.value);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    form.resetFields();
  }, []);

  const onClickLink = useCallback(() => {
    form.setFieldsValue({
      manage: '최연희',
    }); // 나중에 로그인 정보 연동 예정
    setManager('최연희');
  }, []);

  const onChangeDescript = useCallback((value, delta, source, editor) => {
    setDescription(editor.getText());
  }, []);

  const onChangeManager = useCallback((value) => {
    setManager(value);
  }, []);

  const onFinishModal = useCallback(() => {
    setInputValid(true);
  }, []);

  useEffect(() => {
    if (inputValid) {
      dispatch(addTaskRequest({ id: task.length + 1, projectId, summary, description, manager }));
      handleCancel();
      setInputValid(false);
    }
  }, [projectId, taskType, summary, description, manager, inputValid]);

  return (
    <>
      <ModalSection
        title="이슈 만들기"
        visible={visible}
        onCancel={handleCancel}
        width={900}
        okText="만들기"
        cancelText="취소"
        okButtonProps={{ form: 'task-form', htmlType: 'submit', loading: isLoading }}
      >
        <Form
          form={form}
          id="task-form"
          colon={false}
          layout="vertical"
          size="large"
          initialValues={{ type: 'taskType' }}
          onFinish={onFinishModal}
        >
          <Form.Item
            name="project"
            label="프로젝트"
            wrapperCol={{ span: 12 }}
            rules={[{ required: true, message: '이 입력란을 작성하세요.' }]}
          >
            <Select onChange={onChangeProject}>
              <OptGroup label="모든 프로젝트">
                {dummyProject.map((project) => (
                  <Option key={project.id} value={project.id}>
                    <BulbTwoTone style={{ marginRight: '10px' }} />
                    {project.title}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Form.Item>
          <Form.Item name="type" label="이슈 유형" wrapperCol={{ span: 12 }} rules={[{ required: true }]}>
            <Select>
              <Option value="taskType">
                <CheckSquareTwoTone style={{ marginRight: '10px' }} />
                task
              </Option>
            </Select>
          </Form.Item>
          <Divider />
          <Form.Item name="summary" label="요약" rules={[{ required: true, message: '이 입력란을 작성하세요.' }]}>
            <Input onChange={onChangeSummary} value={summary} />
          </Form.Item>
          <Form.Item name="description" label="설명">
            <TextEditor value="description" onChange={onChangeDescript} />
          </Form.Item>
          <Form.Item name="manage" label="담당자" style={{ marginBottom: 0 }}>
            <Select onChange={onChangeManager}>
              <Option value="최연희">최연희</Option>
              <Option value="배유진">배유진</Option>
            </Select>
          </Form.Item>
          <Button style={{ padding: 0 }} type="link" onClick={onClickLink}>
            나에게 할당
          </Button>
        </Form>
      </ModalSection>
    </>
  );
};

export default TaskModal;
