import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/davy-alves-393125279/" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/linkedin.png" alt="linkedin icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Davy-Alves" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/github.png" alt="icon github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eodavas/" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/instagram.png" alt="instagram icon" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/pop-cat.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Davy Alves.
            </p>
        </section>
    </footer>)
}

export default Rodape
