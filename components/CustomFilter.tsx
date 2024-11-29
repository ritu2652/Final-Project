"use client";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {UpdateSearchParams} from '@/utils';
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);
  const handleUpdateParams = (e: {title: string,value: string}) =>{
    const newPathName = UpdateSearchParams(title,e.value.toLowerCase());
    
    router.push(newPathName,{scroll:false});
  }
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) =>{
         setSelected(e);
         handleUpdateParams(e);
      }}>
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                key={option.title}
                value={option}
                className={({ focus, selected }) =>
                  `relative cursor-default select-none py-2 px-4 
                  ${focus ? 'bg-blue-500 text-white' : 'text-gray-900'}
                  ${selected ? 'font-bold' : ''}`
                }
              >
                {({ selected }) => (
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {option.title}
                  </span>
                )}
              </ListboxOption>
              
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
