import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInRequest } from '@src/reducers/user/getUser';
import { Form, Input, Button } from 'antd';
import { FormWrapper } from './styled';
import { useRootState } from '@src/hooks/useRootState';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const LoginForm = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const { isLoggedIn } = useRootState((state) => state.user);

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onFinishLogin = useCallback(() => {
    dispatch(logInRequest({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper>
      <Form {...layout} onFinish={onFinishLogin}>
        <Form.Item label="Username" name="username" required>
          <Input value={id} onChange={onChangeId} required />
        </Form.Item>
        <Form.Item label="Password" name="password" required>
          <Input value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;
