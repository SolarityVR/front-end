import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

import ListSelect from "components/ListSelect";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const CreateContract: FC<IProps> = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-brandblack rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-center"
              >
                Create Contract
              </Dialog.Title>
              <div className="flex flex-col w-full gap-5 my-5">
                <div className="w-full form-control">
                  <input
                    type="text"
                    placeholder="Contract title"
                    className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                  />
                </div>
                <div className="w-full form-control">
                  <textarea
                    placeholder="Description"
                    className="resize-none textarea textarea-primary h-[135px] boder border-base-100 bg-brandblack"
                  />
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="ml-4 label-text text-gray-950">
                      Looking for
                    </span>
                  </label>
                  <div>
                    <ListSelect
                      options={[
                        {
                          label: "Developer",
                        },
                        {
                          label: "Designer",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="ml-4 label-text text-gray-950">
                      Type of Experience
                    </span>
                  </label>
                  <div>
                    <ListSelect
                      options={[
                        {
                          label: "Expert",
                        },
                        {
                          label: "Intermediate",
                        },
                        {
                          label: "Beginner",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="ml-4 label-text text-gray-950">
                      DAO Preference
                    </span>
                  </label>
                  <div>
                    <ListSelect
                      options={[
                        {
                          label: "Any",
                        },
                        {
                          label: "SOL",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="ml-4 label-text text-gray-950">
                      Estimated Budget
                    </span>
                  </label>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="25"
                        className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                      />
                      <div className="absolute top-3 right-3">
                        <Image
                          src="/images/icons/tokens/sol.png"
                          alt={`sol logo`}
                          height={21}
                          width={21}
                        />
                      </div>
                    </div>{" "}
                    <div>
                      <ListSelect
                        options={[
                          {
                            label: "Fixed Price",
                          },
                          {
                            label: "100",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="ml-4 label-text text-gray-950">
                      Estimated Budget
                    </span>
                  </label>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="relative">
                      <input
                        type="date"
                        placeholder="08-23-22"
                        className="w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                      />
                    </div>{" "}
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="text-black normal-case bg-white rounded-full btn "
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="text-sm normal-case rounded-full btn btn-secondary"
                  onClick={onClose}
                >
                  Create Contract
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateContract;
