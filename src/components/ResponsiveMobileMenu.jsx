import { FiMenu } from "react-icons/fi";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const ResponsiveMobileMenu = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="md:hidden flex flex-col gap-2">
            <Button onPress={onOpen} className="max-w-fit">
                {/* <FiMenu /> */}
                Open
            </Button>
            <Modal
                isOpen={isOpen}
                placement="top"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ResponsiveMobileMenu;