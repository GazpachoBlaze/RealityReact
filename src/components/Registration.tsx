import '../styles/forms.css';

import { useForm } from 'react-hook-form';

type FormData = { username: string; password: string };

const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

const onSubmit = (data: FormData) => {
  // use your auth.register call here
};



export {};