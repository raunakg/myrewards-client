import { Modal } from 'antd'

const ProductModal = ({ showModal, setShowModal, modalData }) => {
    return (
        <Modal
            title={`Prduct : ${modalData.title}`}
            visible={showModal}
            onCancel={() => setShowModal(!showModal)}
            width={720}
            footer={null}
        >
            {modalData && (
                <div className="card">
                    <img
                        src={modalData.img}
                        className=""
                        style={{
                            height: '200px',
                            width: 'auto',
                            objectFit: 'contain',
                        }}
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title fs-3">{modalData.title}</h5>
                        <span className="fw-bold">{modalData.offer}</span>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            )}
        </Modal>
    )
}

export default ProductModal
