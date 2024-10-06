import CreateTenantForm from "@/components/auth/create-tenant-form";
import { User } from "@nextui-org/react";

export default function Intake() {
  
    return (
    <div
      className="flex h-screen w-screen items-center justify-end overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
      style={{
        backgroundImage:
          "url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/black-background-texture.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Brand Logo */}
      <div className="absolute left-10 top-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="30"
          height="60"
          viewBox="0 0 384.51 838.87"
        >
          <path
            className="fill-white/80"
            d="M384.51,14.99c0,4.91-2.38,9.28-5.96,12.03l-3.25,1.84-.07.07-180.02,102.8s-6.79,4.37-14.3,10.58c-20.66,18.17-33.81,44.61-34.17,74.26v97.09c0,5.89,6.32,9.57,11.41,6.72,6.32-3.61,12.71-7.08,19.07-10.62,6.4-3.58,12.8-7.15,19.2-10.72,10.9-6.08,24.36,1.63,24.62,14.11h0c.13,6.02-3.04,11.65-8.25,14.67-21.8,12.68-40.48,23.51-51.8,30.08-8.81,5.13-14.27,14.59-14.27,24.81v175.04c0,4.19-2.24,8.09-5.85,10.19l-123.06,72.02c-7.91,4.62-17.81-1.05-17.81-10.19v-332.63C.01,236.84,34.04,184.57,83.88,158.31l.18-.07L360.85,2.67l.25-.11c2.42-1.63,5.31-2.56,8.34-2.56,8.34,0,15.06,6.72,15.06,14.99ZM244.82,398.99c-3.75,2.06-6.08,6-6.08,10.28v259.54c0,25.25,1.78,51.52-8.2,75.3-12.15,28.94-37.04,51.63-67.41,60-59.74,16.47-121.59-20.69-134.03-81.66-1.09-5.35-1.15-11.11,4.13-14.15,0,0,108.72-65.33,108.72-65.33,7.68-4.49,9.27-15.17,3.64-21.98-4.42-5.36-12.2-6.73-18.23-3.3l-96.83,58.57s-15.49,8.94-24.3,14.03c-3.84,2.22-6.18,6.3-6.23,10.74-.09,8.57.65,17.02,2.16,25.18,3.21,17.45,9.83,34.15,19.57,49,18.21,27.76,48.22,47.95,79.59,57.9,36.6,11.61,69.46,5,102.41-13.62,29.63-16.74,58.96-33.97,87.87-51.95,28.87-17.95,57.85-31.72,74.49-62.98,14.01-26.31,18.41-57.19,18.41-86.42v-276.06c0-8.91-9.55-14.57-17.37-10.28l-122.32,67.18ZM312.32,191.52c-31.66,8.56-57.32,44.29-57.32,79.82s25.66,57.38,57.32,48.82c31.66-8.56,57.32-44.29,57.32-79.82s-25.66-57.38-57.32-48.82Z"
          ></path>
        </svg>
      </div>

      {/* Testimonial */}
      <div className="absolute bottom-10 left-10 hidden md:flex flex-col items-start gap-4">
        <User
          avatarProps={{
            src: "https://gravatar.com/avatar/4467bfb0cb9f509d219747c2db2458e0?size=256&cache=1728246405049",
          }}
          classNames={{
            base: "flex",
            name: "w-full text-white",
            description: "text-white/80",
          }}
          description="Full stack web developer"
          name="Feras Jobeir"
        />
        <p className="max-w-xl text-white/60">
          Sample Next.js app with multi-tenant and Internationalization support
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <CreateTenantForm />
      </div>
    </div>
  );
}
