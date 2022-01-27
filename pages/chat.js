import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui
    const [mensagem, setMensagem] = React.useState("");
    const [listaMensagens, setListaMensagens] = React.useState([]);

    const handleNovaMensagem = (novaMensagem) => {
        const mensagem = {
            id: listaMensagens.length,
            de: 'arthurocfernandes',
            texto: novaMensagem,
        };
        setListaMensagens([
            mensagem,
            ...listaMensagens,
        ]);
        setMensagem("");
    }

    // ./Sua lógica vai aqui
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(https://images7.alphacoders.com/493/thumb-1920-493639.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals['750'],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                    border: `1px solid ${appConfig.theme.colors.primary['550']}`
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaMensagens} set={setListaMensagens} />
                    {/* {listaMensagens.map((mensagemAtual) =>{
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}:{mensagemAtual.texto}
                            </li>
                        )
                    })} */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(evento) => {
                                setMensagem(evento.target.value);
                            }}
                            onKeyPress={(evento) => {
                                if (evento.key == "Enter") {
                                    evento.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '90%',
                                height: '100%',
                                border: `2px solid ${appConfig.theme.colors.primary['500']}`,
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            type='submit'
                            onClick={(evento) => {
                                evento.preventDefault();
                                handleNovaMensagem(mensagem);
                            }}

                            label='Ok'
                            size='xl'
                            variant='secondary'
                            styleSheet={{
                                width: '10%',
                                height: '90%'
                            }}
                        >

                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {

    const deletar = (mensagem) =>{
        const lista = props.mensagens;
        const set = props.set;

        const msgSelecionada = (msg) =>{
            if(msg.id != mensagem)
                return msg
        }

        const filtro = lista.filter(msgSelecionada);

        set([
            ...filtro,
        ])

    }

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id * Number((mensagem.texto).charCodeAt(0)) * (Math.random() * 10 +(1 * (Math.random() * 10)))}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.primary['550'],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                                position: 'relative'
                            }}

                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Button
                                onClick={()=>{
                                    deletar(mensagem.id);
                                    console.log(props.mensagens);
                                }}

                                label='X'
                                size='xs'
                                rounded='full'
                                variant='tertiary'
                                styleSheet={{
                                    position: 'absolute',
                                    right: '1rem'
                                }}

                            >

                            </Button>
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}

        </Box>
    )
}