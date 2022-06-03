import { Modal, useMantineTheme } from '@mantine/core';
import style from '../../components/Signup/Signup.module.css'
import Form from '../Form/Form';
import Input from '../Input/Input'
// this is profile user info show modal
const formInputdata = [
    {
        name: "firstname",
        placeholder: "Enter Your First name",
        type: "text",

    },
    {
        name: "lastname",
        placeholder: "Enter Your Last name",
        type: "text",

    },
    {
        name: "livesin",
        placeholder: "Change Livesin",
        type: "text",

    },
    {
        name: "workesin",
        placeholder: "Change Work place",
        type: "text",

    },

]

function ProfileModal({ modalOpen, setModalOpen }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpen}
            onClose={() => { setModalOpen(false) }}
        >
            <Form formInputdata={formInputdata}/>
        </Modal>
    );
}
export default ProfileModal;

/*
            <form className={style.infoform}>
                <h3>Your Info</h3>
                <div>
                    <Input dataProps={
                        {
                            name: "firstname",
                            placeholder: "Enter Your First name",
                            type: "text",

                        }
                    } />
                    <Input dataProps={
                        {
                            name: "lastname",
                            placeholder: "Enter Your Last name",
                            type: "text",

                        }
                    } />
                </div>


            </form>
*/ 