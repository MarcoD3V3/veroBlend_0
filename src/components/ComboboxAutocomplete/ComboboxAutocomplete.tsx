"use client";
import React, { Fragment, useState } from "react";
import styles from "./ComboboxAutocomplete.module.scss";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Person = {
  id: number;
  name: string;
};

const people: Person[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "John Doe" },
  { id: 8, name: "Jane Smith" },
  { id: 9, name: "Michael Johnson" },
  { id: 10, name: "Emily Davis" },
  { id: 11, name: "Daniel Wilson" },
  { id: 12, name: "Sarah Thompson" },
  { id: 13, name: "Christopher Martin" },
  { id: 14, name: "Linda Anderson" },
  { id: 15, name: "David Taylor" },
  { id: 16, name: "Susan Hernandez" },
  { id: 17, name: "Richard Martinez" },
  { id: 18, name: "Karen Robinson" },
  { id: 19, name: "Joseph Lee" },
  { id: 20, name: "Michelle Lewis" },
  { id: 21, name: "William Walker" },
  { id: 22, name: "Jessica Hall" },
  { id: 23, name: "Ryan Young" },
  { id: 24, name: "Laura Rodriguez" },
  { id: 25, name: "Daniel Lewis" },
  { id: 26, name: "Maria Clark" },
  { id: 27, name: "Andrew Lewis" },
  { id: 28, name: "Jennifer King" },
  { id: 29, name: "Brian Turner" },
  { id: 30, name: "Stephanie Adams" },
  { id: 31, name: "Jason Reed" },
  { id: 32, name: "Rebecca Hill" },
  { id: 33, name: "Timothy Turner" },
  { id: 34, name: "Kimberly Foster" },
  { id: 35, name: "Jeffrey Brooks" },
  { id: 36, name: "Nicole Davis" },
  { id: 37, name: "Anthony Mitchell" },
  { id: 38, name: "Melissa Price" },
  { id: 39, name: "Steven Gray" },
  { id: 40, name: "Angela Bell" },
  { id: 41, name: "Scott Wright" },
  { id: 42, name: "Amy Turner" },
  { id: 43, name: "Patrick Allen" },
  { id: 44, name: "Cynthia Nelson" },
  { id: 45, name: "Jonathan Phillips" },
  { id: 46, name: "Samantha Walker" },
  { id: 47, name: "Jason Brown" },
  { id: 48, name: "Olivia Clark" },
  { id: 49, name: "Matthew Adams" },
  { id: 50, name: "Samantha Walker" },
  { id: 51, name: "Grace Thompson" },
  { id: 52, name: "Brandon Hall" },
  { id: 53, name: "Lauren Hernandez" },
  { id: 54, name: "Kevin Mitchell" },
  { id: 55, name: "Emma Turner" },
  { id: 56, name: "Jonathan Foster" },
  { id: 57, name: "Olivia Lewis" },
  { id: 58, name: "Benjamin Brooks" },
  { id: 59, name: "Sophia Wright" },
  { id: 60, name: "Nathan Reed" },
  { id: 61, name: "Hailey Hill" },
  { id: 62, name: "Christopher Allen" },
  { id: 63, name: "Ella Phillips" },
  { id: 64, name: "Carter Clark" },
  { id: 65, name: "Grace Rodriguez" },
  { id: 66, name: "Isaac Young" },
  { id: 67, name: "Mia Martin" },
  { id: 68, name: "Jackson Davis" },
  { id: 69, name: "Chloe Thompson" },
  { id: 70, name: "Ethan Anderson" },
  { id: 71, name: "Lily Wilson" },
  { id: 72, name: "Mason Mitchell" },
  { id: 73, name: "Amelia Taylor" },
  { id: 74, name: "Logan Robinson" },
  { id: 75, name: "Sophia Turner" },
  { id: 76, name: "Lucas Hall" },
  { id: 77, name: "Ava Young" },
  { id: 78, name: "Caleb Hernandez" },
  { id: 79, name: "Ella Walker" },
  { id: 80, name: "Ryan Lewis" },
  { id: 81, name: "Avery Foster" },
  { id: 82, name: "Liam Phillips" },
  { id: 83, name: "Abigail Allen" },
  { id: 84, name: "Henry Clark" },
  { id: 85, name: "Charlotte Davis" },
  { id: 86, name: "Alexander Johnson" },
  { id: 87, name: "Harper Thompson" },
  { id: 88, name: "Daniel Turner" },
  { id: 89, name: "Mila Rodriguez" },
  { id: 90, name: "Sebastian Young" },
  { id: 91, name: "Elizabeth Martin" },
  { id: 92, name: "Julian Wilson" },
  { id: 93, name: "Luna Taylor" },
  { id: 94, name: "David Anderson" },
  { id: 95, name: "Sofia Mitchell" },
  { id: 96, name: "Samuel Wright" },
  { id: 97, name: "Emily Nelson" },
  { id: 98, name: "Owen Hill" },
  { id: 99, name: "Scarlett Adams" },
  { id: 100, name: "Gabriel Brooks" },
];

const ComboboxAutocomplete: React.FC = () => {
  const [selected, setSelected] = useState<Person>(people[0]);
  const [query, setQuery] = useState<string>("");

  const filteredPeople: Person[] =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={styles.ComboboxAutocomplete}>
      <div className="fixed top-16 w-72">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person: Person) => person.name}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => {
                setQuery("");
              }}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default ComboboxAutocomplete;
