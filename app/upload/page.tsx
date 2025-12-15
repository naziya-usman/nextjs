"use client";
import React, { useState } from "react";
import {
  CldUploadWidget,
  CldImage, // 👈 Import CldImage component
} from "next-cloudinary";

// Define the expected structure of the upload result data
interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

const UploadPage = () => {
  const [public_id, setPublicId] = useState("");
  return (

    <div className="container" style={{ padding: '20px' }}>

      {public_id && <CldImage src={public_id} width={270} height={150} alt="image" />}

      <CldUploadWidget
        uploadPreset="uploadPriset"
        options={
          {
            sources: ["local", "url", "camera"],
            maxFiles: 5,
            multiple: false,
            styles: {
              palette: {
                window: "#000000",
                sourceBg: "#000000",
                windowBorder: "#829fd3",
                tabIcon: "#FFFFFF",
                inactiveTabIcon: "#5887df",
                menuIcons: "#2AD9FF",
                link: "#08C0FF",
                action: "#a2bafb",
                inProgress: "#00BFFF",
                complete: "#33ff00",
                error: "#cb1515",
                textDark: "#dc5050",
                textLight: "#f5f0f0"
              },
              fonts: {
                default: null,
                "'Kalam', cursive": {
                  url: "https://fonts.googleapis.com/css?family=Kalam",
                  active: true
                }
              }
            }
          }}
        onSuccess={(resolve, wedget) => {
          if (resolve.event !== "success") return
          const info = resolve.info as CloudinaryUploadResult;
          setPublicId(info.public_id);

        }}
      >
        {({ open }) => (
          <button
            className="btn"
            onClick={() => open()}
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}

export default UploadPage;