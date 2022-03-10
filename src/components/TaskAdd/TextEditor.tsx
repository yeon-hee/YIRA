import React from 'react';
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'code'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'code',
];

interface OnChangeHandler {
  (value: any, delta: any, source: any, editor: any): void;
}

type Props = {
  value: string;
  onChange: OnChangeHandler;
};

const TextEditor = ({ value, onChange }: Props) => {
  return (
    <ReactQuill
      theme="snow"
      value={value || ''}
      modules={modules}
      formats={formats}
      onChange={onChange}
      style={{ height: '150px', marginBottom: '30px' }}
    />
  );
};

export default TextEditor;
