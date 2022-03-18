import React, { FC, useState } from "react";
import Image from "next/image";
import Base from "components/Modals/Base";
import ListSelect from "components/ListSelect";
import { RadioGroup } from "@headlessui/react";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const CreateProposal: FC<IProps> = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [selected, setSelected] = React.useState<string>("real-time");
  return (
    <Base open={open} onClose={onClose} title="New Proposal">
      <div className="flex flex-col gap-10">
        <div className="w-full form-control">
          <label className="label">
            <span className="ml-4 text-white label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Contract title"
            className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
          />
        </div>

        <RaidoButtons />

        <div className="w-full form-control">
          <label className="label">
            <span className="ml-4 text-white label-text">Description</span>
          </label>
          <textarea
            placeholder="A description of your proposal"
            className="resize-none textarea textarea-primary h-[135px] boder border-base-100 bg-brandblack"
          />
        </div>

        <div className="w-full form-control">
          <label className="label">
            <span className="ml-4 label-text text-gray-950">Shares Requested</span>
          </label>
          <input
            type="text"
            placeholder="25"
            className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
          />
        </div>

        <div className="w-full form-control">
          <label className="label">
            <span className="ml-4 label-text text-gray-950">Token Tribute</span>
          </label>
          <div className="grid items-center grid-cols-2 gap-10">
            <div className="relative">
              <input
                type="text"
                placeholder="25"
                className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
              />
            </div>{" "}
            <div>
              <ListSelect
                options={[
                  {
                    label: "SOL",
                  },
                  {
                    label: "VERSE",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="mt-1 text-black normal-case bg-white rounded-full btn-sm btn "
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-sm normal-case rounded-full btn btn-sm btn-secondary"
            onClick={onClose}
          >
            Create Proposal
          </button>
        </div>
      </div>
    </Base>
  );
};

export default CreateProposal;

const RaidoButtons = () => {
  let [plan, setPlan] = useState("real-time");

  return (
    <RadioGroup value={plan} onChange={setPlan} className="flex flex-col gap-4">
      <RadioGroup.Option value="real-time">
        {({ checked }) => (
          <div className="flex gap-4">
            <div className="w-5">
              {checked ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#6163FF"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9.5" stroke="#2F3336" />
                </svg>
              )}
            </div>

            <span className="text-[15px]">Real time results</span>
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="encrypted">
        {({ checked }) => (
          <div className="flex gap-4">
            <div className="w-5 ">
              {checked ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="#6163FF"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9.5" stroke="#2F3336" />
                </svg>
              )}
            </div>

            <span className="text-[15px]">Encrypted results</span>
          </div>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};
