import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, DatePicker } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import { useRootState } from '@src/hooks/useRootState';
import { PROJECT_STATUS } from '@src/types/project';
import { addProjectRequest } from '@src/reducers/project/addProject';
import { AddProjectType } from './ProjectAddModal';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 15 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const formatDate = (date: string) => {
  const d = new Date(date),
    year = d.getFullYear();
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
};

const ProjectAddForm = ({ visible, setIsModalVisible }: AddProjectType) => {
  const [pname, setPname] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [leader, setLeader] = useState<string>('');
  const [teammates, setTeammates] = useState<string[]>([]);
  const [teammate, setTeammate] = useState<string>('');

  const dispatch = useDispatch();

  const { project } = useRootState((state) => state.project);

  const [form] = Form.useForm();

  const onChangePname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPname(e.target.value);
  }, []);

  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  }, []);

  const onChangeDate = useCallback((e) => {
    setStartDate(formatDate(e[0]._d));
    setEndDate(formatDate(e[1]._d));
  }, []);

  const onChangeLeader = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLeader(e.target.value);
  }, []);

  const onChangeTeammate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTeammate(e.target.value.trim());
  }, []);

  const onEnterTeammates = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && teammate != '') {
        const res = teammates.filter((t) => t == teammate);
        if (res.length !== 0) {
          setTeammate('');
          return;
        }
        setTeammates([...teammates, teammate.trim()]);
        setTeammate('');
        form.setFieldsValue({
          teammate: '',
        });
      }
    },
    [form, teammate, teammates],
  );
  const onClickTeammates = useCallback(() => {
    const res = teammates.filter((t) => t == teammate);
    if (res.length !== 0) {
      setTeammate('');
      return;
    }
    setTeammates([...teammates, teammate.trim()]);
    setTeammate('');
    form.setFieldsValue({
      teammate: '',
    });
  }, [form, teammate, teammates]);
  const validateTeammate = useCallback(
    (_, value: string) => {
      if (teammates.filter((t) => t == value.trim()).length !== 0) return Promise.reject(new Error('중복된 팀원'));
      return Promise.resolve();
    },
    [teammates],
  );

  const validatePname = useCallback(
    (_, value: string) => {
      const res = project.filter((p) => p.pname == value);
      if (res.length !== 0) {
        return Promise.reject(new Error('중복된 프로젝트명'));
      }
      return Promise.resolve();
    },
    [project],
  );
  const validateDate = useCallback(
    (_, value: string) => {
      if (startDate == '' || endDate == '') {
        return Promise.reject(new Error('날짜를 선택해주세요'));
      }
      return Promise.resolve();
    },
    [startDate, endDate],
  );

  const onDelTeammates = useCallback(
    (t) => {
      setTeammates(teammates.filter((mate) => mate != t));
    },
    [teammates],
  );

  const onFinishAdd = useCallback(() => {
    dispatch(
      addProjectRequest({
        id: Date.now(),
        pname,
        desc,
        startDate,
        endDate,
        leader,
        teammates,
        status: PROJECT_STATUS.TODO,
        creator: '',
      }),
    );
    form.resetFields();
    setTeammates([]);
    setIsModalVisible(false);
  }, [pname, form, dispatch, desc, startDate, endDate, leader, teammates]);

  return (
    <>
      <Form
        {...layout}
        form={form}
        onKeyPress={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        onFinish={onFinishAdd}
      >
        <Form.Item label="프로젝트명" name="pname" required rules={[{ validator: validatePname }]}>
          <Input value={pname} onChange={onChangePname} required />
        </Form.Item>
        <Form.Item label="개요" name="desc" required>
          <Input value={desc} onChange={onChangeDesc} required />
        </Form.Item>
        <Form.Item label="기간" name="date" rules={[{ validator: validateDate }]} required>
          <Input.Group compact>
            <DatePicker.RangePicker onChange={onChangeDate} />
          </Input.Group>
        </Form.Item>
        <Form.Item label="리더" name="leader" required>
          <Input value={leader} onChange={onChangeLeader} required />
        </Form.Item>
        <Form.Item label="팀원" name="teammate" rules={[{ validator: validateTeammate }]}>
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 50px)' }}
              placeholder="e-mail 입력"
              value={teammate}
              onChange={onChangeTeammate}
              onKeyPress={onEnterTeammates}
            />
            <Button style={{ width: '50px' }} type="primary" onClick={onClickTeammates}>
              +
            </Button>
          </Input.Group>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <div>
            {teammates.map((t) => (
              <ul key={t}>
                <li>
                  <span>
                    {t}
                    <CloseSquareOutlined
                      onClick={() => {
                        onDelTeammates(t);
                      }}
                    />
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="default"
            htmlType="reset"
            onClick={() => {
              setTeammates([]);
            }}
          >
            reset
          </Button>
          <Button type="primary" htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProjectAddForm;