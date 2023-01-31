import { Input } from "@/components/common"
import { Layout } from "@/components/layout"
import { useState } from "react"

export const CadastroProdutos: React.FC = () => {


    const [sku, setSku] = useState('')
    const [preco, setPreco] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')


    const submit = () => {
        const produto = {
            sku,
            preco,
            nome,
            descricao
        }
    }


    return (

        <Layout titulo="Cadastro de Produtos">

            <div className="columns">
                <Input
                    label="SKU: *"
                    columnClasses="is-half"
                    onChange={setSku}
                    value={sku}
                    id="inputSku"
                    placeholder="Digite o SKU do produto"
                />
                <Input
                    label="Preço: *"
                    columnClasses="is-half"
                    onChange={setPreco}
                    value={preco}
                    id="inputPreco"
                    placeholder="Digite o Preço do produto"
                />
            </div>

            <div className="columns">
                <Input
                    label="Nome: *"
                    columnClasses="is-full"
                    onChange={setNome}
                    value={nome}
                    id="inputNome"
                    placeholder="Digite o Nome do produto"
                />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inputDescricao"> Descrição: * </label>
                    <div className="control">
                        <textarea
                            id="inputDescricao"
                            className="textarea"
                            placeholder="Digite a Descrição do produto"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)}
                        />
                    </div>
                </div>
            </div>



            <div className="field is-grouped">
                <div className="control">
                    <button
                        className="button"
                        onClick={submit}
                    >
                        Salvar</button>
                </div>

                <div className="control">
                    <button className="button">Voltar</button>
                </div>
            </div>


        </Layout>
    )
}