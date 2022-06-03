import { Modal, useMantineTheme } from '@mantine/core';
import Form from '../Form/Form';

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
        placeholder: "Change City",
        type: "text",

    },
    {
        name: "workesin",
        placeholder: "Change Work place",
        type: "text",

    },
    {
        name: "profileImage",
        placeholder: "Profile Image",
        type: "file",

    },
    {
        name: "coverImage",
        placeholder: "Profile Image",
        type: "file",

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
            <Form
                formInputdata={formInputdata}
                formh3={"Update Your Information"}
                btnText={"Update"}
                formSpanText={""}
            />
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