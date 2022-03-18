/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { useAtom } from "jotai";
import { createFormAtom } from "atoms/create";

const Sqad = () => {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: false,
    limitFilesConfig: { max: 1 },
    maxFileSize: 50,
  });

  const [form, setForm] = useAtom(createFormAtom);

  useEffect(() => {
    setForm({ ...form, file: filesContent[0] });
  }, [filesContent]);

  console.log({ filesContent });
  return (
    <div className="flex flex-col gap-4 p-10 border border-brandblack rounded-3xl">
      <span className="font-bold text-[19px]">Create a new DAO</span>
      <button
        onClick={openFileSelector}
        className="flex items-center justify-center w-32 h-32 rounded-full bg-brandblack"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-10"
        >
          <path
            d="M34.9498 1.66663H30.0498C28.5998 1.66663 27.5332 2.26663 27.0498 3.33329C26.7832 3.81663 26.6665 4.38329 26.6665 5.04996V9.94996C26.6665 12.0666 27.9332 13.3333 30.0498 13.3333H34.9498C35.6165 13.3333 36.1832 13.2166 36.6665 12.95C37.7332 12.4666 38.3332 11.4 38.3332 9.94996V5.04996C38.3332 2.93329 37.0665 1.66663 34.9498 1.66663ZM36.5165 8.21663C36.3498 8.38329 36.0998 8.49996 35.8332 8.51663H33.4832V9.36663L33.4998 10.8333C33.4832 11.1166 33.3832 11.35 33.1832 11.55C33.0165 11.7166 32.7665 11.8333 32.4998 11.8333C31.9498 11.8333 31.4998 11.3833 31.4998 10.8333V8.49996L29.1665 8.51663C28.6165 8.51663 28.1665 8.04996 28.1665 7.49996C28.1665 6.94996 28.6165 6.49996 29.1665 6.49996L30.6332 6.51663H31.4998V4.18329C31.4998 3.63329 31.9498 3.16663 32.4998 3.16663C33.0498 3.16663 33.4998 3.63329 33.4998 4.18329L33.4832 5.36663V6.49996H35.8332C36.3832 6.49996 36.8332 6.94996 36.8332 7.49996C36.8165 7.78329 36.6998 8.01663 36.5165 8.21663Z"
            fill="white"
          />
          <path
            d="M14.9999 17.3C17.1906 17.3 18.9665 15.5241 18.9665 13.3334C18.9665 11.1426 17.1906 9.3667 14.9999 9.3667C12.8091 9.3667 11.0332 11.1426 11.0332 13.3334C11.0332 15.5241 12.8091 17.3 14.9999 17.3Z"
            fill="white"
          />
          <path
            d="M34.9502 13.3334H34.1668V21.0167L33.9502 20.8334C32.6502 19.7167 30.5502 19.7167 29.2502 20.8334L22.3168 26.7834C21.0168 27.9 18.9168 27.9 17.6168 26.7834L17.0502 26.3167C15.8668 25.2834 13.9835 25.1834 12.6502 26.0834L6.41683 30.2667C6.05016 29.3334 5.8335 28.25 5.8335 26.9834V13.0167C5.8335 8.31671 8.31683 5.83337 13.0168 5.83337H26.6668V5.05004C26.6668 4.38337 26.7835 3.81671 27.0502 3.33337H13.0168C6.95016 3.33337 3.3335 6.95004 3.3335 13.0167V26.9834C3.3335 28.8 3.65016 30.3834 4.26683 31.7167C5.70016 34.8834 8.76683 36.6667 13.0168 36.6667H26.9835C33.0502 36.6667 36.6668 33.05 36.6668 26.9834V12.95C36.1835 13.2167 35.6168 13.3334 34.9502 13.3334Z"
            fill="white"
          />
        </svg>
        {filesContent && filesContent[0] && (
          <img
            alt={filesContent[0].name}
            src={filesContent[0].content}
            className="absolute z-0 w-32 h-32 rounded-full"
          ></img>
        )}
      </button>
      <div className="w-full max-w-md form-control">
        <label className="label">
          <span className=" label-text text-gray-950">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
          onChange={ (e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
      </div>
      <div className="w-full max-w-md form-control">
        <label className="label">
          <span className=" label-text text-gray-950">Description</span>
        </label>
        <input
          type="text"
          placeholder="Add a description"
          className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
          onChange={ (e) => {
            setForm({ ...form, description: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Sqad;
