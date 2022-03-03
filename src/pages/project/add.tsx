import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addProject } from '@src/reducers/project/getProject';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const ProjectAdd = () => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useDispatch();

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  }, []);

  const onFinishAdd = useCallback(() => {
    dispatch(addProject({ name, desc }));
  }, [name, desc]);

  return (
    <>
      <Form {...layout} onFinish={onFinishAdd}>
        <Form.Item label="Project" name="project" required>
          <Input value={name} onChange={onChangeName} required />
        </Form.Item>
        <Form.Item label="Description" name="description" required>
          <Input value={desc} onChange={onChangeDesc} required />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProjectAdd;
