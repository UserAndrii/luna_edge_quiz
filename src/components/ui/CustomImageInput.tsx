import { ChangeEvent, FC, useRef } from 'react';
import { MdAddAPhoto, MdDelete } from 'react-icons/md';

export interface ICustomImageInput {
  setImage: (arg: string) => void;
  image: string;
}

export const CustomImageInput: FC<ICustomImageInput> = ({
  image,
  setImage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files?.length) return;

    const file = e.currentTarget.files[0];

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleCloseIconClick = () => {
    setImage('');
  };

  return (
    <>
      {image ? (
        <div className='relative mx-auto mb-6 flex h-60 max-w-[620px] items-center justify-center overflow-hidden md:h-80'>
          <img
            className='h-auto w-full rounded object-contain shadow-md'
            src={image}
            alt='Logo for Quiz'
          />
          <div
            className='absolute right-2 top-10 m-2 cursor-pointer rounded-full bg-red-500 p-1 text-white hover:bg-red-600 md:top-2'
            onClick={handleCloseIconClick}
          >
            <MdDelete size={24} />
          </div>
        </div>
      ) : (
        <div
          className='mx-auto mb-6 flex h-60 max-w-[620px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 p-4 hover:border-gray-600 md:h-80'
          onClick={() => inputRef.current?.click()}
        >
          <MdAddAPhoto
            size={48}
            className='text-gray-400 hover:text-gray-600'
          />
          <p className='mt-2 text-gray-400 hover:text-gray-600'>
            Download banner
          </p>
        </div>
      )}
      <input
        type='file'
        id='image'
        name='image'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
      />
    </>
  );
};
