import React, { useState, useRef, Fragment, useEffect} from 'react';
import styles from './CreateUsers.module.scss';
import { UserCard } from '../User';
import Image from 'next/image';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface IFormInput {
  firstName: string;
  lastName: string;
  url: string;
  example: string;
}


const CreateUsers: React.FC = () => {
	// const nameRef = useRef<HTMLInputElement>(null);
	// const urlRef = useRef<HTMLInputElement>(null);
	// const [error, setError] = useState('');
	// const [ImgError, setImgError] = useState('/logo.png')
	// const [img, setImg] = useState('')

	// const [nameUser, setNameUser] = useState('');
	// const [urlImage, setUrlImage] = useState('');
	// const [errorUser, setErrorUser] = useState(true);

	// function handler(): void {
	// 	if (urlRef.current && nameRef.current) {
	// 		const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
	// 		const NameValue = nameRef.current.value;
	// 		const UrlValue = urlRef.current.value;
	// 		if (UrlValue == '' && NameValue == '' || NameValue == '' || UrlValue == '') {
	// 			setError('rellenar todos los campos: ');
	// 			setErrorUser(false)
	// 			setNameUser('');
	// 			setUrlImage('');
	// 		}
	// 		else if (typeof urlRef == 'string') {
	// 			setUrlImage('')
	// 		}
	// 		else {
	// 			console.log(urlRef.current.value);
	// 			setNameUser(nameRef.current.value);
	// 			setUrlImage(urlRef.current.value);
	// 			setErrorUser(true);
	// 			setError('');
	// 		}
	// 	}
	// }
	// console.log(urlRef.current)

	// const on = useRef<HTMLImageElement>(null);
	// function onClick(): void {
	// 	if (on.current !== null || on.current) {
	// 		const current = on.current;
	// 		const src = on.current.src;
	// 		if (src == null) {
	// 			setImgError('/logoTriste.png')
	// 		} else {
	// 			setImgError('/logoTriste.png')
	// 			console.log(urlImage)
	// 		}
	// 		// setImg(src)
	// 		// console.log(src)
	// 		// console.log(img)
	// 	}
	// }

	
	 const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input


//https://images.vexels.com/media/users/3/139158/isolated/preview/c862a3c9ef219140fb365301f9ebbd50-punto-negro-by-vexels.png


	return (
		<>
			{/* <div className={styles.createUsers}>
				<form>
					<input type="text" placeholder="name" className='bg-black' ref={nameRef} />
					<input type="text" placeholder="imageURL" className='bg-black' ref={urlRef} />
					<input type="button" value="Create" onClick={handler} />
					<div>{nameUser}</div>
					<div>{urlImage}</div>
					<div className={styles.ErrorText}><p>{error}</p></div>
				</form>
			</div>
			{errorUser && <>
				<div className="rounded-lg shadow-md p-4">
					<div className="w-40 h-40 mx-auto mb-4">
						<Image ref={on} src={ImgError} alt={nameUser} className="rounded-full" width={100} height={100} />
					</div>
					<h2 className="text-xl font-semibold text-center">{nameUser}</h2>
					<button onClick={onClick}>Click</button>
				</div>
			</>
			} */}
			 <div className={styles.CreateUsers}>
				<div className={styles.containerForm}>
					<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
						<label className={styles.LfirstName}>First Name</label>
						<input
						className={styles.firstNameInput}
							{...register("firstName", {
								required: true,
								maxLength: 20,
								pattern: /^[A-Za-z]+$/i
							})}
						/>
						{errors?.firstName?.type === "required" && <p>This field is required</p>}
						{errors?.firstName?.type === "maxLength" && (
							<p>First name cannot exceed 20 characters</p>
						)}
						{errors?.firstName?.type === "pattern" && (
							<p>Alphabetical characters only</p>
						)}
						<label className={styles.LlastName}>Laste Name</label>
						<input className={styles.lastNameInput} 
						{...register("lastName",
						{ required:true,
						minLength: 4,
						pattern: /^[A-Za-z]+$/i
						})}
						/>
						{errors?.lastName?.type === "pattern" && (
							<p>Alphabetical characters only</p>
						)}
						<label className={styles.LAge}>Url</label>
						<input className={styles.ageInput}
						{...register("url", { pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?.+[.]([a-z]{3}|[a-z]{4})$/i, })} />
						{errors.url && (
							<p className={styles.errorAge}>the URL you are putting is not valid</p>
						)}
						<input  className={styles.button} type="submit" />
					</form>
				</div>
			 </div>
			 <Menu>
				<Menu.Button>More</Menu.Button>
					<Menu.Items>
						<Menu.Item>
							{({ active }) => (
								<Link
									className={`${active && 'bg-blue-500'}`}
									href="/"
								>
									Account settings
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link href="/" className={`${active && 'bg-blue-500'}`}>
									Documentation
								</Link>
							)}
						</Menu.Item>
						<Menu.Item disabled>
							<span className="opacity-75">Invite a friend (coming soon!)</span>
						</Menu.Item>
					</Menu.Items>
				</Menu>
				<div className="fixed top-16 w-56 text-right">
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							Options
							<ChevronDownIcon
								className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
								aria-hidden="true"
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="px-1 py-1 ">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? 'bg-violet-500 text-white' : 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{active ? (
												<EditActiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											) : (
												<EditInactiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											)}
											Edit
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? 'bg-violet-500 text-white' : 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{active ? (
												<DuplicateActiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											) : (
												<DuplicateInactiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											)}
											Duplicate
										</button>
									)}
								</Menu.Item>
							</div>
							<div className="px-1 py-1">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? 'bg-violet-500 text-white' : 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{active ? (
												<ArchiveActiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											) : (
												<ArchiveInactiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											)}
											Archive
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? 'bg-violet-500 text-white' : 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{active ? (
												<MoveActiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											) : (
												<MoveInactiveIcon
													className="mr-2 h-5 w-5"
													aria-hidden="true"
												/>
											)}
											Move
										</button>
									)}
								</Menu.Item>
							</div>
							<div className="px-1 py-1">
								<Menu.Item>
									{({ active }) => (
										<button
											className={`${
												active ? 'bg-violet-500 text-white' : 'text-gray-900'
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{active ? (
												<DeleteActiveIcon
													className="mr-2 h-5 w-5 text-violet-400"
													aria-hidden="true"
												/>
											) : (
												<DeleteInactiveIcon
													className="mr-2 h-5 w-5 text-violet-400"
													aria-hidden="true"
												/>
											)}
											Delete
										</button>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>

		</>
	);
}


function EditInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props: any) {
	alert("hola")
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

export default CreateUsers;
