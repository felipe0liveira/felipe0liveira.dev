import Window from '../window'
import styles from './index.module.css'

const Donate = () => {
  return (
    <>
      <Window title='Donate' icon='thumbs-o-up' closable={true}>
        <p>
          Qualquer donate, independente de valor, é extremamente válido e muito
          bem recebido <i className='fa fa-heart'></i>
        </p>

        <p>
          Para fazer um <strong>donate</strong>, atualmente é possível somente
          utilizando o PIX, via QRCode
        </p>

        <div className={styles.QRCode}>
          <img
            src='/images/qr_donate.jpg'
            alt='QR Code donate for felipe0liveira.dev'
          />
          <hr />

          <p>
            <small>Chave</small>
            <br />
            <small>
              <i>78b5b317-1d82-4b3f-82cb-e04d1b3b7329</i>
            </small>
          </p>
        </div>
      </Window>
    </>
  )
}

export default Donate
