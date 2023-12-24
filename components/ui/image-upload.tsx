"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";

import {CldUploadWidget} from "next-cloudinary"
interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: String[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  if (!isMounted) {
    return null;
  }


  return (<div>
    <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
            <div key={url} className="relative w-[200px] h-[200px]">
                    <div className="z-10 absolute top-2 right-2">
                        <Button type="button" onClick={() => onRemove(url)} variant='destructive'>
                            <Trash />
                        </Button>
                    </div>
                    <Image fill className="object-cover" alt="img" src={url}/>
            </div>
        ))}
    </div>
    <CldUploadWidget onUpload={onUpload} uploadPreset="pmt0zmgd">

        {({open}) => {
            const onClick = () => {
                open();
            }

            return (
                <div>
                    <Button typeof="button" onClick={onClick}>
                        <ImagePlus />
                        upload Image
                    </Button>
                </div>
            )
        }}
    </CldUploadWidget>
  </div>);
};

export default ImageUpload