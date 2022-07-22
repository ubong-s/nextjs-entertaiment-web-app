import { useSelector } from 'react-redux';
import { toggleUserModal } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const UserModal = () => {
   const dispatch = useAppDispatch();
   const { userModal } = useSelector((state: RootState) => state.user);

   return (
      <div
         className={userModal ? 'modal active' : 'modal'}
         onClick={() => dispatch(toggleUserModal())}
      >
         <div className='container  bg-themeBlueDark max-w-lg rounded-lg p-12 text-center flex flex-col gap-4 z-30'>
            <h2 className='text-3xl'>Ubong Sylvester</h2>
            <a
               href='https://devubong.com/'
               target='_blank'
               rel='noreferrer noopener'
               className='modal-link'
            >
               devubong.com
            </a>
            <a
               href='https://github.com/ubong-s/nextjs-entertaiment-web-app'
               target='_blank'
               rel='noreferrer noopener'
               className='modal-link'
            >
               Project Repo
            </a>
         </div>
      </div>
   );
};

export default UserModal;
