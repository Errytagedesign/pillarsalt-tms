/* eslint @typescript-eslint/no-explicit-any: "off" */

import { DatePicker, DatePickerProps, TimePicker, TimePickerProps } from 'antd';
import React, { useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import dayjs from 'dayjs';
import ErrorMessage from '../ErrorMessage';
import { GetProps } from 'react-redux';
import PhoneInput from 'react-phone-input-2';

export interface IFormInputProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  error?: string | boolean | Date | undefined;
  defaultValue?: string | number;
  DateTimeValue?: Date | string;
  defaultCheck?: boolean;
  telValue?: string;
  type?: React.HTMLInputTypeAttribute | 'textarea' | 'select';
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  icon?: JSX.Element | string;
  required?: boolean;
  disabled?: boolean;
  startDate?: Date | string;
  selectOptions?: any[];
  valuePropertyName?: string;
  keyPropertyName?: string;
  itemPropertyName?: string;
  defaultCountry?: string;
  onlyCountries?: string[];
}

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const FormInput = ({
  className,
  labelClassName,
  label,
  type,
  id,
  name,
  onChange,
  onBlur,
  icon,
  placeholder,
  required,
  disabled,
  defaultValue,
  DateTimeValue,
  error,
  startDate,
  selectOptions,
  keyPropertyName,
  itemPropertyName,
  valuePropertyName,
  defaultCheck,
  telValue,
  defaultCountry,
  onlyCountries,
}: IFormInputProps) => {
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleShowPassword = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDateChange: DatePickerProps['onChange'] = (_, dateString) => {
    onChange &&
      onChange({
        target: {
          name: name,
          value: dateString,
        },
      });
  };

  const handleTimeChange: TimePickerProps['onChange'] = (_, timeString) => {
    onChange &&
      onChange({
        target: {
          name: name,
          value: timeString,
        },
      });
  };

  const handleTelChange = (value: string) => {
    onChange &&
      onChange({
        target: {
          name: name,
          value: value,
        },
      });
  };

  // const handleFileChange = (e: any) => {
  //   const file = e.target.files[0];
  //   getBase64(file, (url: any) => {
  //     onChange && onChange(url);
  //   });
  // };

  // Generate current time to use it as default time for the TimePicker
  // const currentTime = dayjs().format('HH:mm:ss');

  // Disabled date starting from a day before the curre
  const disabledDate: RangePickerProps['disabledDate'] = (current: any) => {
    // Can not select days before today and today
    return current && current < dayjs().subtract(1, 'day');
  };

  return (
    <div className={`${error ? '' : ''} ${className}`}>
      {type !== 'checkbox' && label && (
        <label
          htmlFor={id}
          className={`${labelClassName} flex items-center gap-2 mb-3`}
        >
          {required ? <em className='!m-0 !p-0'> * </em> : ''}{' '}
          <span>{label}</span>
        </label>
      )}

      {icon && <span>{icon}</span>}
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={6}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? 'errors form-controls' : 'form-controls'}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
        ></textarea>
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? 'errors form-controls' : 'form-controls'}
          disabled={disabled}
          defaultValue={defaultValue}
        >
          <option> {placeholder || defaultValue} </option>
          {selectOptions?.map((item) => (
            <option
              key={item[item && keyPropertyName] || item}
              value={item[item && valuePropertyName] || item}
              selected={
                item[item && valuePropertyName] === defaultValue ||
                item === defaultValue
              }
            >
              {' '}
              {item[item && itemPropertyName] || item}{' '}
            </option>
          ))}
        </select>
      ) : type === 'checkbox' ? (
        <div className='flex items-center w-full gap-2'>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            className={error ? 'errors  !m-0' : '!m-0'}
            placeholder={placeholder}
            disabled={disabled}
            defaultChecked={defaultCheck}
          />
          <small className='text-[var(--secColor)]'>{label} </small>
        </div>
      ) : type === 'date' ? (
        <DatePicker
          id={id}
          name={name}
          className={error ? 'errors !flex' : '!flex'}
          onChange={handleDateChange}
          defaultValue={dayjs(startDate || '0000-00-00', 'YYYY-MM-DD')}
          placeholder={placeholder}
          disabledDate={disabledDate}
        />
      ) : type === 'time' ? (
        <TimePicker
          id={id}
          name={name}
          className={error ? 'errors !flex mb-3' : '!flex'}
          onChange={handleTimeChange}
          defaultValue={dayjs(DateTimeValue || '00:00:00', 'HH:mm:ss')}
          placeholder={placeholder}
          needConfirm={false}
          disabled={disabled}
        />
      ) : type === 'tel' ? (
        <PhoneInput
          country={defaultCountry || 'us'}
          value={telValue}
          onChange={handleTelChange}
          inputProps={{
            name: name,
            required: required,
          }}
          inputClass={
            error
              ? 'errors  form-controls  !pl-[48px]'
              : ' form-controls  !pl-[48px]'
          }
          // containerClass={
          //   error
          //     ? 'errors  form-controls !px-0 '
          //     : ' form-controls !px-0 '
          // }
          buttonClass='bg-[transparent]'
          onBlur={onBlur}
          onlyCountries={onlyCountries}
          disabled={disabled}
        />
      ) : type === 'password' ? (
        <div className='relative'>
          <input
            id={id}
            name={name}
            type={showPassword[id] ? 'text' : 'password'}
            onChange={onChange}
            onBlur={onBlur}
            className={error ? 'errors form-controls' : 'form-controls'}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
          />{' '}
          <span
            className='cursor-pointer absolute top-[35%] right-6'
            onClick={() => handleShowPassword(id)}
          >
            {showPassword[id] ? (
              <BsFillEyeSlashFill color='var(--Grey6)' />
            ) : (
              <BsFillEyeFill color='var(--Grey6)' />
            )}
          </span>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? 'errors form-controls' : 'form-controls'}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      )}

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FormInput;
