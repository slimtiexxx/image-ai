import React, { FC, useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { CommonFormStepProps } from "@components/FormStepper/FormStepper";

export const ImageUpload: FC<CommonFormStepProps> = ({
  setReady,
  isActive,
}) => {
  const [file, setFile] = useState<Blob | MediaSource>();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (isActive) {
      setReady(!!file);
    }
  }, [file, isActive, setReady]);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <div>
      <div className="flex w-full items-center justify-center">
        {preview && (
          <div className="flex w-1/2 flex-col items-center justify-center overflow-hidden rounded-xl shadow-2xl">
            <img src={preview} className="h-full w-full" />
          </div>
        )}
        {!preview && (
          <label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-300 bg-primary-50 transition hover:bg-primary-100"
          >
            <div className="flex flex-col items-center justify-center px-12 pt-5 pb-6">
              <PhotoIcon className="mb-3 h-10 w-10 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
            </div>
            <input
              onChange={handleFileChange}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};
