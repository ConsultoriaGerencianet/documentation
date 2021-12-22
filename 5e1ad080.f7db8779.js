(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{154:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"Highlight",(function(){return d})),t.d(a,"default",(function(){return b}));var o=t(2),n=t(6),r=(t(0),t(237)),i=(t(239),{id:"PrestaShop",title:"PrestaShop",hide_title:!0,sidebar_label:"PrestaShop"}),s={id:"Modulos/PrestaShop",isDocsHomePage:!1,title:"PrestaShop",description:"PrestaShop",source:"@site/docs\\Modulos\\PrestaShop.md",permalink:"/documentation.github.io/docs/Modulos/PrestaShop",sidebar_label:"PrestaShop"},c=[{value:"1. Requisitos",id:"1-requisitos",children:[]},{value:"2. Instala\xe7\xe3o do M\xf3dulo",id:"2-instala\xe7\xe3o-do-m\xf3dulo",children:[{value:"Instala\xe7\xe3o Autom\xe1tica",id:"instala\xe7\xe3o-autom\xe1tica",children:[]},{value:"Instala\xe7\xe3o Manual",id:"instala\xe7\xe3o-manual",children:[]}]},{value:"3. Configura\xe7\xf5es do Plugin Gerencianet para PrestaShop",id:"3-configura\xe7\xf5es-do-plugin-gerencianet-para-prestashop",children:[{value:"Configura\xe7\xf5es Gerais",id:"configura\xe7\xf5es-gerais",children:[]},{value:"Credenciais",id:"credenciais",children:[]}]},{value:"4. Funcionamento do M\xf3dulo",id:"4-funcionamento-do-m\xf3dulo",children:[]},{value:"5. D\xfavidas Frequentes",id:"5-d\xfavidas-frequentes",children:[]},{value:"6. Suporte e Sugest\xf5es",id:"6-suporte-e-sugest\xf5es",children:[]}],d=function(e){var a=e.children,t=e.color;return Object(r.b)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.1rem"}},a)},l={rightToc:c,Highlight:d};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"PrestaShop"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para PrestaShop - Vers\xe3o 0.3.1")),Object(r.b)("p",null,"O m\xf3dulo Gerencianet para Prestashop permite receber pagamentos por meio do ",Object(r.b)("strong",null,"checkout transparente da nossa API"),". Compat\xedvel com a vers\xe3o ",Object(r.b)(d,{color:"#777",mdxType:"Highlight"},"1.6.x")," do PrestaShop."),Object(r.b)("p",null,"Este \xe9 o M\xf3dulo de integra\xe7\xe3o fornecido pela ",Object(r.b)("a",{target:"blank",href:"https://gerencianet.com.br"},"Gerencianet "),"para PrestaShop. Com ele, o propriet\xe1rio da loja pode optar por receber pagamentos por boleto banc\xe1rio e/ou cart\xe3o de cr\xe9dito. Todo processo \xe9 realizado por meio do checkout transparente. Com isso, o comprador n\xe3o precisa sair do site da loja para efetuar o pagamento."),Object(r.b)("br",null),Object(r.b)("h2",{id:"1-requisitos"},"1. Requisitos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",Object(r.b)("inlineCode",{parentName:"li"},"5.4.39")," \xe0 ",Object(r.b)("inlineCode",{parentName:"li"},"7.0.3")),Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do PrestaShop: ",Object(r.b)("inlineCode",{parentName:"li"},"1.6.x"))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema n\xe3o se encaixa nos requisitos, n\xe3o significa que o m\xf3dulo n\xe3o vai funcionar em seu PrestaShop, mas sim, que n\xe3o testamos no mesmo ambiente. ",Object(r.b)("strong",{parentName:"p"},"Portanto, n\xe3o garantimos o funcionamento deste m\xf3dulo em ambientes diferentes dos citados acima.")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"2-instala\xe7\xe3o-do-m\xf3dulo"},"2. Instala\xe7\xe3o do M\xf3dulo"),Object(r.b)("p",null,"O m\xf3dulo da Gerencianet para PrestaShop pode ser instalado de duas formas diferentes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"#instala%C3%A7%C3%A3o-autom%C3%A1tica"}),"Instala\xe7\xe3o Autom\xe1tica:"))," utilizando o arquivo de instala\xe7\xe3o do m\xf3dulo compactado atrav\xe9s da ferramenta de adicionar novos M\xf3dulos do PrestaShop;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"#instala%C3%A7%C3%A3o-manual"}),"Instala\xe7\xe3o Manual:"))," os arquivos do m\xf3dulo devem ser enviados manualmente para o servidor de hospedagem via FTP."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"instala\xe7\xe3o-autom\xe1tica"},"Instala\xe7\xe3o Autom\xe1tica"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"}),"download da \xfaltima vers\xe3o do m\xf3dulo"),' (arquivo "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'");')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse a administra\xe7\xe3o da sua loja, acesse ",Object(r.b)("code",null,"M\xf3dulos > Adicione um novo M\xf3dulo"),' e envie o arquivo "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'" que voc\xea acabou de baixar;')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Depois de enviar o m\xf3dulo para sua loja, clica em ",Object(r.b)("code",null,"Instalar")," e aguarde a finaliza\xe7\xe3o do processo."))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop.png",alt:"alt text"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Configure o m\xf3dulo em ",Object(r.b)("code",null,"M\xf3dulos > Gerencianet > Configurar")," e comece a receber pagamentos.")),Object(r.b)("br",null),Object(r.b)("h3",{id:"instala\xe7\xe3o-manual"},"Instala\xe7\xe3o Manual"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"}),"download da \xfaltima vers\xe3o do m\xf3dulo"),' (arquivo "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'") e extraia seu conte\xfado ou realize o ',Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-prestashop/tree/master/manual/gerencianet",target:"_blank"},"download")," da \xfaltima vers\xe3o descompactada (pasta ",Object(r.b)("code",null,"/manual"),");")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse a loja via FTP e envie toda a pasta ",Object(r.b)("code",null,"gerencianet")," descompactada para a pasta de destino ",Object(r.b)("code",null,"modules")," que se encontra na raiz dos arquivos da loja no servidor;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse a administra\xe7\xe3o da loja e acesse ",Object(r.b)("code",null,"M\xf3dulos"),". Procure pelo m\xf3dulo da Gerencianet na lista, clique em ",Object(r.b)("code",null,"Instalar")," e aguarde a finaliza\xe7\xe3o do processo;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure o m\xf3dulo em ",Object(r.b)("code",null,"M\xf3dulos > Gerencianet > Configurar")," e comece a receber pagamentos."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-configura\xe7\xf5es-do-plugin-gerencianet-para-prestashop"},"3. Configura\xe7\xf5es do Plugin Gerencianet para PrestaShop"),Object(r.b)("p",null,"Para configurar o M\xf3dulo da Gerencianet para Prestashop, o lojista dever\xe1 acessar a interface administrativa da loja virtual e, no menu principal, acessar o op\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"M\xf3dulos"),". Procure pelo m\xf3dulo da Gerencianet na lista que ser\xe1 exibida e depois clique em ",Object(r.b)("inlineCode",{parentName:"p"},"Configurar"),", conforme imagem abaixo:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop1.png",alt:"alt text"}))),Object(r.b)("br",null),Object(r.b)("p",null,"Ao entrar na configura\xe7\xe3o do m\xf3dulo, a seguinte interface ser\xe1 exibida:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop2.png",alt:"alt text"}))),Object(r.b)("p",null,"As credencias e prefer\xeancias dever\xe3o ser configuradas atrav\xe9s das duas abas disponibilizadas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#configura%C3%A7%C3%B5es-gerais"}),"Configura\xe7\xf5es Gerais")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#credenciais"}),"Credenciais"))),Object(r.b)("br",null),Object(r.b)("h3",{id:"configura\xe7\xf5es-gerais"},"Configura\xe7\xf5es Gerais"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop3.png",alt:"alt text"}))),Object(r.b)("p",null,"Nesta aba, as seguintes propriedades podem ser configuradas:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Modo:")," Configure se deseja ativar o m\xf3dulo em Desenvolvimento (ambiente de testes) ou Produ\xe7\xe3o (cobran\xe7a real);")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Op\xe7\xf5es de Pagamento:")," Configure as op\xe7\xf5es de pagamento que deseja receber: Boleto e/ou Cart\xe3o de Cr\xe9dito.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Dias para vencimento do Boleto:")," Configure o n\xfamero de dias corridos para vencimento do Boleto.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Desconto para pagamento no boleto(%):")," Defina se deseja aplicar desconto para pagamentos com Boleto.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Atualizar status dos pedidos PrestaShop automaticamente:")," Configure se deseja que o m\xf3dulo atualize os status dos pedidos da loja automaticamente de acordo com as notifica\xe7\xf5es da Gerencianet.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Status:")," Configure se o M\xf3dulo estar\xe1 dispon\xedvel para os clientes."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"credenciais"},"Credenciais"),Object(r.b)("p",null,'Nesta aba \xe9 necess\xe1rio informar as credenciais de sua aplica\xe7\xe3o, isto \xe9, o "Client_Id" e "Client_Secret" (veja onde localizar, de acordo com o ambiente: ',Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"desenvolvimento")," e ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"produ\xe7\xe3o"),") da sua aplica\xe7\xe3o e o ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"identificador da conta")," obtidos na aplica\xe7\xe3o criada na Gerencianet."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"O lojista dever\xe1 inserir as credenciais de aplica\xe7\xe3o Gerencianet nos respectivos campos. Para ter acesso a essas credenciais, voc\xea dever\xe1 criar uma nova aplica\xe7\xe3o Gerencianet ou utilizar uma j\xe1 existente. Para criar uma aplica\xe7\xe3o, entre em sua conta Gerencianet, acesse ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es > Nova aplica\xe7\xe3o"),'. Escolha um nome e crie a nova aplica\xe7\xe3o. Agora j\xe1 j\xe1 ter\xe1 acesso \xe0s credenciais da aplica\xe7\xe3o. Copie-as e insira nos respectivos campos da aba "Credenciais" em sua loja (Client_Id e Client_Secret de ',Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"produ\xe7\xe3o")," e ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"desenvolvimento"),").")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Insira o ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"identificador da conta")," Gerencianet.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clique em ",Object(r.b)("code",null,"Salvar")," e agora sua loja virtual j\xe1 est\xe1 pronta para receber pagamentos pela Gerencianet."))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Quando estiver em ambiente de produ\xe7\xe3o, use a Client_Id e Client_Secret da aba "Produ\xe7\xe3o" e a op\xe7\xe3o sandbox desativada. Se estiver em desenvolvimento, use a Client_Id e Client_Secret da aba "Desenvolvimento" com a op\xe7\xe3o sandbox habilitada. Se n\xe3o for realizado dessa forma, uma poss\xedvel mensagem de "unauthorized" (sem autoriza\xe7\xe3o) poder\xe1 ser retornada.'))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Importante salientar que ",Object(r.b)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',Object(r.b)("code",null,"paid"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),Object(r.b)("p",{parentName:"div"},"\xc9 importante saber que as palavras ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"4-funcionamento-do-m\xf3dulo"},"4. Funcionamento do M\xf3dulo"),Object(r.b)("p",null,"Ap\xf3s ser habilitado, o m\xf3dulo j\xe1 estar\xe1 dispon\xedvel como uma op\xe7\xe3o de pagamento."),Object(r.b)("p",null,"Dependendo da sua configura\xe7\xe3o de habilitar ou n\xe3o a op\xe7\xe3o de ",Object(r.b)("code",null,"Pagamento em um passo"),", a p\xe1gina que o cliente digitar\xe1 seus dados de pagamento ser\xe1 diferente."),Object(r.b)("p",null,"Se a op\xe7\xe3o de ",Object(r.b)("code",null,"Pagamento em um passo")," estiver ativa, seu cliente ir\xe1 preencher os dados de pagamento na mesma tela de ",Object(r.b)("code",null,"Finalizar compra"),", conforme as figuras abaixo:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop4.png",alt:"alt text"}))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop5.png",alt:"alt text"}))),Object(r.b)("p",null,"Desta forma, ao clicar em ",Object(r.b)("code",null,"Finalizar Compra"),", os dados do cliente ser\xe3o validados e,caso esteja tudo correto a cobran\xe7a ser\xe1 gerada e a compra finalizada. O cliente ent\xe3o \xe9 redirecionado para a p\xe1gina de compra finalizada."),Object(r.b)("p",null,"Caso a op\xe7\xe3o de ",Object(r.b)("code",null,"Pagamento em um passo")," n\xe3o estiver ativa, seu cliente ir\xe1 preencher os dados pessoas e de entrega na p\xe1gina de ",Object(r.b)("code",null,"Finalizar Compra")," e ao clicar em ",Object(r.b)("code",null,"Confirmar Pedido")," ser\xe1 redirecionado para outra p\xe1gina para prosseguir com o pagamento, onde optar\xe1 pelas op\xe7\xf5es de pagamento da Gerencianet, conforme figura abaixo:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/prestashop6.png",alt:"alt text"}))),Object(r.b)("p",null,"Ambas as telas de pagamento podem sofrer mudan\xe7as de acordo com o tema utilizado na loja."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"OBSERVA\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Se algum dos campos obrigat\xf3rios para o realizar o pagamento n\xe3o for preenchido corretamente, ele ser\xe1 cobrado novamente no formul\xe1rio de pagamento. Para ",Object(r.b)("strong",{parentName:"p"},"Boleto Banc\xe1rio"),", os campos obrigat\xf3rios s\xe3o: ",Object(r.b)("strong",null,"Nome, E-mail, CPF e Telefone"),". Para ",Object(r.b)("strong",{parentName:"p"},"Cart\xe3o de Cr\xe9dito"),", os campos obrigat\xf3rios s\xe3o: ",Object(r.b)("strong",null,"Nome, E-mail, CPF, data de nascimento, Telefone, Endere\xe7o, N\xfamero, Bairro, CEP, Cidade e Estado.")))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"5-d\xfavidas-frequentes"},"5. D\xfavidas Frequentes"),Object(r.b)("h4",{id:"51-\xe9-obrigat\xf3rio-possuir-ssl-em-minha-loja-para-aceitar-pagamentos-com-o-m\xf3dulo"},"5.1. \xc9 obrigat\xf3rio possuir SSL em minha loja para aceitar pagamentos com o m\xf3dulo?"),Object(r.b)("p",null,"Para que o m\xf3dulo da Gerencianet para PrestaShop funcione, n\xe3o \xe9 necess\xe1rio que a loja possua um certificado SSL. Contudo \xe9 extremamente recomendado pela Gerencianet que os lojistas utilizem. Independente da sua utiliza\xe7\xe3o, todos os dados de pagamento s\xe3o criptografados e transmitidos com seguran\xe7a para valida\xe7\xe3o do pagamento. A presen\xe7a de um certificado SSL\ninstalado em sua loja garante maior seguran\xe7a para o lojista e para os clientes que realizam compras. A aus\xeancia do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma p\xe1gina que n\xe3o possui um certificado."),Object(r.b)("br",null),Object(r.b)("h4",{id:"52-quero-usar-o-checkout-transparente-de-forma-que-o-cliente-n\xe3o-saia-da-minha-loja-para-realizar-o-pagamento-\xe9-poss\xedvel"},"5.2. Quero usar o Checkout Transparente de forma que o cliente n\xe3o saia da minha loja para realizar o pagamento. \xc9 poss\xedvel?"),Object(r.b)("p",null,"Sim. O m\xf3dulo da Gerencianet para PrestaShop utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente ir\xe1 sair da sua loja virtual para finalizar o pagamento. Assim, no \xfaltimo passo da compra, ser\xe1 solicitado ao clientes dos dados obrigat\xf3rios para efetivar o pagamento."),Object(r.b)("h4",{id:"53-\xe9-poss\xedvel-utilizar-as-funcionalidades-de-marketplace-ou-assinaturas-com-o-m\xf3dulo"},"5.3. \xc9 poss\xedvel utilizar as funcionalidades de MarketPlace ou Assinaturas com o m\xf3dulo?"),Object(r.b)("p",null,"Ainda n\xe3o. Acompanhe nosso ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../UltimasNovidades/changelog"}),"changelog")," para visualizar todas as novidades."),Object(r.b)("br",null),Object(r.b)("h4",{id:"54-as-parcelas-das-op\xe7\xf5es-de-pagamento-n\xe3o-est\xe3o-sendo-carregadas-como-corrigir"},"5.4. As parcelas das op\xe7\xf5es de pagamento n\xe3o est\xe3o sendo carregadas. Como corrigir?"),Object(r.b)("p",null,'Se ap\xf3s a instala\xe7\xe3o e configura\xe7\xe3o do m\xf3dulo as parcelas do cart\xe3o de cr\xe9dito n\xe3o carregarem ao clicar sobre as bandeiras dos cart\xf5es, o lojista dever\xe1 verificar as credenciais informadas na configura\xe7\xe3o do m\xf3dulo (chaves Client_Id, Client_Secret e tamb\xe9m o "identificador da conta"). Se estiverem corretas, entre em contato com a Gerencianet para que o problema seja analisado.'),Object(r.b)("br",null),Object(r.b)("h4",{id:"55-estou-recebendo-a-mensagem-unauthorized-ao-tentar-finalizar-uma-compra-o-que-fazer"},"5.5. Estou recebendo a mensagem \u201cUnauthorized\u201d ao tentar finalizar uma compra. O que fazer?"),Object(r.b)("p",null,"Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais est\xe3o corretamente inseridas nos respectivos campos de PRODU\xc7\xc3O e DESENVOLVIMENTO. Confira em ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gerencianet.com.br/artigo/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que/"}),"nossa FAQ")," informa\xe7\xf5es detalhadas."),Object(r.b)("br",null),Object(r.b)("h4",{id:"56-est\xe1-aparecendo-a-mensagem-gerencianet-desabilitada-o-modo-sandbox-ambiente-de-testes-est\xe1-ativo-suas-cobran\xe7as-n\xe3o-ser\xe3o-validadas-como-corrigir"},"5.6. Est\xe1 aparecendo a mensagem \u201c",Object(r.b)("em",{parentName:"h4"},"Gerencianet Desabilitada: O modo Sandbox (Ambiente de testes) est\xe1 ativo. Suas cobran\xe7as n\xe3o ser\xe3o validadas"),"\u201d. Como corrigir?"),Object(r.b)("p",null,'Esta mensagem ir\xe1 ser exibida quando seu m\xf3dulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e come\xe7ar a receber com a Gerencianet, acesse as configura\xe7\xf5es do m\xf3dulo em "M\xf3dulos" > "Gerencianet" > "Configurar" e desmarque a op\xe7\xe3o \u201cSandBox\u201d > \u201cHabilitar Sandbox Gerencianet (Ambiente de testes)\u201d.'),Object(r.b)("br",null),Object(r.b)("h4",{id:"57-onde-posso-acompanhar-as-transa\xe7\xf5es-geradas-pelo-m\xf3dulo"},"5.7. Onde posso acompanhar as transa\xe7\xf5es geradas pelo m\xf3dulo?"),Object(r.b)("p",null,"As transa\xe7\xf5es geradas atrav\xe9s do m\xf3dulo podem ser acompanhadas em sua conta Gerencianet no link \u201cAPI\u201d > \u201cMinhas Aplica\xe7\xf5es\u201d > \u201cSua Aplica\xe7\xe3o\u201d. Neste ambiente voc\xea poder\xe1 acompanhar todas as transa\xe7\xf5es e suas respectivas situa\xe7\xf5es."),Object(r.b)("h4",{id:"58-quando-tento-realizar-um-pagamento-recebo-a-mensagem-ocorreu-um-erro-ao-tentar-realizar-a-sua-requisi\xe7\xe3o-entre-em-contato-com-o-propriet\xe1rio-da-loja"},"5.8. Quando tento realizar um pagamento recebo a mensagem \u201cOcorreu um erro ao tentar realizar a sua requisi\xe7\xe3o. Entre em contato com o propriet\xe1rio da loja.\u201d"),Object(r.b)("p",null,'Essa mensagem de erro pode ser exibida no momento da finaliza\xe7\xe3o da compra por diversos fatores. Neste caso, o primeiro passo \xe9 verificar as credenciais da sua aplica\xe7\xe3o e tamb\xe9m conferir em sua API a subaba "hist\xf3rico de requisi\xe7\xf5es" (',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../VisaoGeral/InterpretandoErros"}),"veja como usar este recurso"),")."),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"6-suporte-e-sugest\xf5es"},"6. Suporte e Sugest\xf5es"),Object(r.b)("p",null,"Sua sugest\xe3o de novas ideias e implementa\xe7\xf5es para o m\xf3dulo da Gerencianet para PrestaShop \xe9 muito importante. Portanto, caso voc\xea tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugest\xe3o e avaliar a possibilidade de implanta\xe7\xe3o."),Object(r.b)("p",null,"Caso voc\xea tenha alguma d\xfavida, entre em contato conosco pelo site ",Object(r.b)("a",{href:"https://gerencianet.com.br/",target:"_blank"},"Gerencianet"),".")))}b.isMDXComponent=!0},237:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),l=function(e){var a=n.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=l(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(t),m=o,u=b["".concat(i,".").concat(m)]||b[m]||p[m]||r;return t?n.a.createElement(u,s(s({ref:a},d),{},{components:t})):n.a.createElement(u,s({ref:a},d))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},238:function(e,a,t){"use strict";var o=t(0),n=t(35);a.a=function(){return Object(o.useContext)(n.a)}},239:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var o=t(238),n=t(240);function r(e,{forcePrependBaseUrl:a=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(o.a)();if(!e)return e;if(a)return r+e;if(!Object(n.a)(e))return e;const s=r+e.replace(/^\//,"");return t?i+s:s}},240:function(e,a,t){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}t.d(a,"a",(function(){return o}))}}]);