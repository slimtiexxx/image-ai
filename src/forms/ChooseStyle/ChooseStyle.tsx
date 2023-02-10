import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { CommonFormStepProps } from "@components/FormStepper/FormStepper";

const styles = ["Avatar", "Anime", "Disney"];

export const ChooseStyle: FC<CommonFormStepProps> = ({
  setReady,
  isActive,
}) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (isActive) {
      setReady(!!selected);
    }
  }, [selected, setReady, isActive]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="mb-8 block w-full text-center text-2xl font-medium">
        Choose a style
      </RadioGroup.Label>
      <div className="flex space-x-4">
        {styles.map((style) => (
          <RadioGroup.Option
            key={style}
            value={style}
            className={({ checked }) =>
              classNames([
                "cursor-pointer select-none rounded-md p-10 font-bold shadow ring-2 transition hover:shadow-lg active:scale-[.95]",
                {
                  "bg-primary-50 ring-primary-300 hover:ring-primary": !checked,
                  "bg-primary text-white ring-primary": checked,
                },
              ])
            }
          >
            {({ checked }) => (
              <>
                <div className="flex">
                  <RadioGroup.Label
                    as="div"
                    className={classNames([
                      "font-medium transition",
                      {
                        "text-black": !checked,
                        "text-white": checked,
                      },
                    ])}
                  >
                    {style}
                  </RadioGroup.Label>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
