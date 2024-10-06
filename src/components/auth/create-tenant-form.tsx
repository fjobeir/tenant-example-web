"use client";

import { Button, Divider, Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { Icon } from "@iconify/react";

const CreateTenantForm: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <p className="pb-2 text-xl font-medium">Sign up</p>
      <form
        className="flex w-full flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Name"
          name="name"
          placeholder="Enter your name"
          type="text"
          variant="bordered"
          isRequired
        />
        <Input
          label="Domain"
          name="name"
          placeholder="Enter domain"
          type="text"
          variant="bordered"
          isRequired
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.ringthebell.app</span>
            </div>
          }
        />
        <Input
          label="Email Address"
          name="email"
          placeholder="Enter your email"
          type="email"
          isRequired
          variant="bordered"
        />
        <Input
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-closed-linear"
                />
              ) : (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-bold"
                />
              )}
            </button>
          }
          isRequired    
          label="Password"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <Button color="primary" type="submit">
          Sign up
        </Button>
      </form>
      <div className="w-full flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered"
        >
          Continue with Google
        </Button>
        <Button
          startContent={
            <Icon className="text-default-500" icon="fe:github" width={24} />
          }
          variant="bordered"
        >
          Continue with Github
        </Button>
      </div>
    </>
  );
};

export default CreateTenantForm;
