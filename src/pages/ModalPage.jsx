import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false);



    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div className='relative'>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate deserunt atque nulla? Deserunt dolorum perferendis, pariatur mollitia sint recusandae quos, nulla velit atque impedit, nam repellendus labore voluptate. Maiores corporis quo quibusdam reiciendis cupiditate quae. Illum earum ea commodi dolor repellat quisquam voluptatem inventore blanditiis qui. Possimus recusandae porro autem voluptas voluptate esse quo quisquam obcaecati laboriosam, eligendi, ea exercitationem suscipit pariatur adipisci sed ducimus.</p>
        </div>
    )
}

export default ModalPage
