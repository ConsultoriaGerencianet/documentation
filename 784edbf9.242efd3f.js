(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return T})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),o=(a(0),a(237)),b=(a(239),a(244)),c=a(245),l={id:"ExtratoFinanceiro",title:"Extrato Financeiro em OFX",hide_title:!0,sidebar_label:"Extrato Financeiro em OFX"},i={id:"OutrosRecursos/ExtratoFinanceiro",isDocsHomePage:!1,title:"Extrato Financeiro em OFX",description:"Extrato Financeiro em OFX",source:"@site/docs\\OutrosRecursos\\ExtratoFinanceiro.md",permalink:"/documentation.github.io/docs/OutrosRecursos/ExtratoFinanceiro",sidebar_label:"Extrato Financeiro em OFX"},T=[{value:"Como exportar o extrato banc\xe1rio em arquivo OFX na Gerencianet",id:"como-exportar-o-extrato-banc\xe1rio-em-arquivo-ofx-na-gerencianet",children:[]},{value:"Exemplo de arquivo OFX com suas particularidades e layout",id:"exemplo-de-arquivo-ofx-com-suas-particularidades-e-layout",children:[{value:"OFX &gt; SIGNONMSGSRSV1 &gt; SONRS",id:"ofx--signonmsgsrsv1--sonrs",children:[]},{value:"OFX &gt; BANKMSGSRSV1 &gt; STMTTRNRS &gt; STMTRS &gt; BANKACCTFROM",id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--bankacctfrom",children:[]},{value:"OFX &gt; BANKMSGSRSV1 &gt; STMTTRNRS &gt; STMTRS &gt; BANKTRANLIST",id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist",children:[]},{value:"OFX &gt; BANKMSGSRSV1 &gt; STMTTRNRS &gt; STMTRS &gt; BANKTRANLIST &gt; STMTTRN",id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist--stmttrn",children:[]},{value:"OFX &gt; BANKMSGSRSV1 &gt; STMTTRNRS &gt; STMTRS &gt; BANKTRANLIST &gt; LEDGERBAL",id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist--ledgerbal",children:[]},{value:"Tabela com a rela\xe7\xe3o de todos os poss\xedveis C\xf3digos das Transa\xe7\xf5es da tag FITID",id:"tabela-com-a-rela\xe7\xe3o-de-todos-os-poss\xedveis-c\xf3digos-das-transa\xe7\xf5es-da-tag-fitid",children:[]}]},{value:"Status da fila de notifica\xe7\xf5es (callback)",id:"status-da-fila-de-notifica\xe7\xf5es-callback",children:[]}],s={rightToc:T};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Extrato Financeiro em OFX"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Um arquivo do tipo OFX \xe9 conhecido como ",Object(o.b)("em",{parentName:"p"},"Open Financial Exchange"),". Dentro de um arquivo OFX est\xe3o contidas todas as movimenta\xe7\xf5es feitas em um determinado per\xedodo, sendo poss\xedvel que voc\xea integre este arquivo a variados sistemas de gest\xe3o."),Object(o.b)("p",null,"A Gerencianet permite que voc\xea exporte seu extrato financeiro no formato OFX, que poder\xe1 ajud\xe1-lo na concilia\xe7\xe3o banc\xe1ria de seu financeiro."),Object(o.b)("br",null),Object(o.b)("h2",{id:"como-exportar-o-extrato-banc\xe1rio-em-arquivo-ofx-na-gerencianet"},"Como exportar o extrato banc\xe1rio em arquivo OFX na Gerencianet"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Efetue login em sua conta Gerencianet e clique no menu ",Object(o.b)("code",null,"Meu Dinheiro > Extrato Financeiro"),";")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Agora, no canto superior \xe0 direita, clique em ",Object(o.b)("code",null,"Exportar Extrato Financeiro")," e selecione o formato ",Object(o.b)("code",null,"OFX"),", conforme demonstrado na imagem:"))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://gerencianet.com.br/wp-content/uploads/2018/07/exportacao-relatorio-ofx.png",alt:"alt text",title:"Exportar Extrato Financeiro"}))),Object(o.b)("br",null),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Ser\xe1 retornado em um modal uma mensagem de confirma\xe7\xe3o da exporta\xe7\xe3o, contendo o resumo dos par\xe2metros/filtros considerados, conforme demonstra a imagem abaixo:")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://gerencianet.com.br/wp-content/uploads/2018/07/exportacao-relatorio-ofx-02.png",alt:"alt text",title:"Exportar Extrato Financeiro Modal"}))),Object(o.b)("br",null),Object(o.b)("h2",{id:"exemplo-de-arquivo-ofx-com-suas-particularidades-e-layout"},"Exemplo de arquivo OFX com suas particularidades e layout"),Object(o.b)(b.a,{defaultValue:"modelo",values:[{label:"Modelo",value:"modelo"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"modelo",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:UTF-8\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n<OFX>\n  <SIGNONMSGSRSV1>\n    <SONRS>\n      <STATUS>\n        <CODE>0</CODE>\n        <SEVERITY>INFO</SEVERITY>\n      </STATUS>\n      <DTSERVER>20180430120030[-3:BRT]</DTSERVER>\n      <LANGUAGE>POR</LANGUAGE>\n      <FI>\n        <ORG>Gerencianet</ORG>\n        <FID>gnt</FID>\n      </FI>\n    </SONRS>\n  </SIGNONMSGSRSV1>\n  <BANKMSGSRSV1>\n    <STMTTRNRS>\n      <TRNUID>1</TRNUID>\n      <STATUS>\n        <CODE>0</CODE>\n        <SEVERITY>INFO</SEVERITY>\n      </STATUS>\n      <STMTRS>\n        <CURDEF>BRL</CURDEF>\n        <BANKACCTFROM>\n          <BANKID>gnt</BANKID>\n          <ACCTID>1459950-11</ACCTID>\n          <ACCTTYPE>CHECKING</ACCTTYPE>\n        </BANKACCTFROM>\n        <BANKTRANLIST>\n          <DTSTART>20180130120000[-3:BRT]</DTSTART>\n          <DTEND>20180429120000[-3:BRT]</DTEND>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180309120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>74,40</TRNAMT>\n            <FITID>2018030607232002046000000061553574</FITID>\n            <CHECKNUM>000000061553574</CHECKNUM>\n            <REFNUM>2002046000000017223405</REFNUM>\n            <MEMO>Repasse pagamento: 17223405 de Jorge Teixeira</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180309120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018030607231001046000000061553576</FITID>\n            <CHECKNUM>000000061553576</CHECKNUM>\n            <MEMO>Tarifa repasse: 17223405 de Jorge Teixeira</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180320120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>74,40</TRNAMT>\n            <FITID>2018031703312002046000000062976602</FITID>\n            <CHECKNUM>000000062976602</CHECKNUM>\n            <REFNUM>2002046000000022612776</REFNUM>\n            <MEMO>Repasse pagamento: 22612776 de Paulo Jorge Alves</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180320120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018031703311001046000000062976603</FITID>\n            <CHECKNUM>000000062976603</CHECKNUM>\n            <MEMO>Tarifa repasse: 22612776 de Paulo Jorge Alves</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180330120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>74,40</TRNAMT>\n            <FITID>2018032704142002046000000063575983</FITID>\n            <CHECKNUM>000000063575983</CHECKNUM>\n            <REFNUM>2002046000000028015595</REFNUM>\n            <MEMO>Repasse pagamento: 28015595 de Fulano Aguiar</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180330120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018032704141001046000000063575986</FITID>\n            <CHECKNUM>000000063575986</CHECKNUM>\n            <MEMO>Tarifa repasse: 28015595 de Fulano Aguiar</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180406120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>65,10</TRNAMT>\n            <FITID>2018040307262002046000000064109592</FITID>\n            <CHECKNUM>000000064109592</CHECKNUM>\n            <REFNUM>2002046000000028108174</REFNUM>\n            <MEMO>Repasse pagamento: 28108174 de Ciclano da Silva</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180406120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018040307261001046000000064109593</FITID>\n            <CHECKNUM>000000064109593</CHECKNUM>\n            <MEMO>Tarifa repasse: 28108174 de Ciclano da Silva</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180416120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>74,40</TRNAMT>\n            <FITID>2018041303342002046000000065551500</FITID>\n            <CHECKNUM>000000065551500</CHECKNUM>\n            <REFNUM>2002046000000029384993</REFNUM>\n            <MEMO>Repasse pagamento: 29384993 de Jorge Amado</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180416120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018041303341001046000000065551501</FITID>\n            <CHECKNUM>000000065551501</CHECKNUM>\n            <MEMO>Tarifa repasse: 29384993 de Jorge Amado</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180417120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>55,80</TRNAMT>\n            <FITID>2018041403362002046000000065642576</FITID>\n            <CHECKNUM>000000065642576</CHECKNUM>\n            <REFNUM>2002046000000029447637</REFNUM>\n            <MEMO>Repasse pagamento: 29447637 de Pedro Jorge</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180417120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018041403361001046000000065642577</FITID>\n            <CHECKNUM>000000065642577</CHECKNUM>\n            <MEMO>Tarifa repasse: 29447637 de Pedro Jorge</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180428120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>120,90</TRNAMT>\n            <FITID>2018041421312002047000000065694866</FITID>\n            <CHECKNUM>000000065694866</CHECKNUM>\n            <REFNUM>2002047000000029517140</REFNUM>\n            <MEMO>Repasse pagamento: 29517140 de Beltrano Diniz</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180428120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-7,23</TRNAMT>\n            <FITID>2018041421311001047000000065694867</FITID>\n            <CHECKNUM>000000065694867</CHECKNUM>\n            <MEMO>Tarifa repasse: 29517140 de Beltrano Diniz</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180429120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>55,80</TRNAMT>\n            <FITID>2018041517302002047000000065696376</FITID>\n            <CHECKNUM>000000065696376</CHECKNUM>\n            <REFNUM>2002047000000029533821</REFNUM>\n            <MEMO>Repasse pagamento: 29533821 de Henrique Almeida</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180429120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,49</TRNAMT>\n            <FITID>2018041517301001047000000065696377</FITID>\n            <CHECKNUM>000000065696377</CHECKNUM>\n            <MEMO>Tarifa repasse: 29533821 de Henrique Almeida</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>CREDIT</TRNTYPE>\n            <DTPOSTED>20180429120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>74,40</TRNAMT>\n            <FITID>2018042606102002046000000066643667</FITID>\n            <CHECKNUM>000000066643667</CHECKNUM>\n            <REFNUM>2002046000000030830691</REFNUM>\n            <MEMO>Repasse pagamento: 30830691 de Duque Alves</MEMO>\n          </STMTTRN>\n          <STMTTRN>\n            <TRNTYPE>DEBIT</TRNTYPE>\n            <DTPOSTED>20180429120000[-3:BRT]</DTPOSTED>\n            <TRNAMT>-3,34</TRNAMT>\n            <FITID>2018042606101001046000000066643670</FITID>\n            <CHECKNUM>000000066643670</CHECKNUM>\n            <MEMO>Tarifa repasse: 30830691 de Duque Alves</MEMO>\n          </STMTTRN>\n        </BANKTRANLIST>\n        <LEDGERBAL>\n          <BALAMT>635,50</BALAMT>\n          <DTASOF>20180429120000[-3:BRT]</DTASOF>\n        </LEDGERBAL>\n      </STMTRS>\n    </STMTTRNRS>\n  </BANKMSGSRSV1>\n</OFX>\n")))),Object(o.b)("br",null),Object(o.b)("p",null,"Grande parte do arquivo ser\xe1 da forma como est\xe1 o exemplo, apenas as tags listadas a seguir ser\xe3o modificadas."),Object(o.b)("h3",{id:"ofx--signonmsgsrsv1--sonrs"},"OFX > SIGNONMSGSRSV1 > SONRS"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DTSERVER"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data de gera\xe7\xe3o do arquivo no formato ",Object(o.b)("inlineCode",{parentName:"td"},"yyyymmddhhmmss[-3:BRT]"),".")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--bankacctfrom"},"OFX > BANKMSGSRSV1 > STMTTRNRS > STMTRS > BANKACCTFROM"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ACCTID"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N\xfamero da conta Gerencianet.")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist"},"OFX > BANKMSGSRSV1 > STMTTRNRS > STMTRS > BANKTRANLIST"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tag"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DTSTART"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data do primeiro registro de movimenta\xe7\xe3o no formato ",Object(o.b)("inlineCode",{parentName:"td"},"yyyymmdd120000[-3:BRT]"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DTEND"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data do \xfaltimo registro de movimenta\xe7\xe3o no formato ",Object(o.b)("inlineCode",{parentName:"td"},"yyyymmdd120000[-3:BRT]"),".")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist--stmttrn"},"OFX > BANKMSGSRSV1 > STMTTRNRS > STMTRS > BANKTRANLIST > STMTTRN"),Object(o.b)("p",null,"A tag ",Object(o.b)("inlineCode",{parentName:"p"},"STMTTRN")," e suas sub-tags ser\xe3o repetidas para cada uma das transa\xe7\xf5es retornadas pelo Kernel."),Object(o.b)("table",null,Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Tag"),Object(o.b)("th",{align:"center"},"Descri\xe7\xe3o")),Object(o.b)("tr",null,Object(o.b)("td",null,"TRNTYPE"),Object(o.b)("td",{align:"left"},"Aceita os valores ",Object(o.b)("code",null,"CREDIT")," ou ",Object(o.b)("code",null,"DEBIT"),".")),Object(o.b)("tr",null,Object(o.b)("td",null,"DTPOSTED"),Object(o.b)("td",{align:"left"},"Data de lan\xe7amento da transa\xe7\xe3o. Ou seja, a data de disponibiliza\xe7\xe3o do valor na conta corrente.",Object(o.b)("br",null),"Formato: ",Object(o.b)("code",null,"yyyymmdd120000[-3:BRT]"),".")),Object(o.b)("tr",null,Object(o.b)("td",null,"TRNAMT"),Object(o.b)("td",{align:"left"},"Valor da transa\xe7\xe3o com duas casas decimais para os centavos (separados por ponto). Se a transa\xe7\xe3o for um d\xe9bito, haver\xe1 um sinal negativo no valor.",Object(o.b)("br",null),"Exemplos:",Object(o.b)("ul",null,Object(o.b)("li",null,"Cr\xe9dito: ",Object(o.b)("code",null,"123.45")," equivale a R$ 123,45"),Object(o.b)("li",null,"D\xe9bito: ",Object(o.b)("code",null,"-84.30")," equivale a -R$ 84,30")))),Object(o.b)("tr",null,Object(o.b)("td",null,"FITID"),Object(o.b)("td",{align:"left"},"C\xf3digo \xfanico da transa\xe7\xe3o com 34 caracteres, dispostos da seguinte forma:",Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("li",null,"12 caracteres para a data"),Object(o.b)("li",null,"7 caracteres para o c\xf3digo da transa\xe7\xe3o"),Object(o.b)("li",null,"15 caracteres para o protocolo")),"Exemplo:",Object(o.b)("ul",null,Object(o.b)("li",null,"Data: 28/03/2018 08:05"),Object(o.b)("li",null,"C\xf3digo da transa\xe7\xe3o: 2002001 (vide tabela completa)"),Object(o.b)("li",null,"Protocolo: 63773485")),"FITID:  ",Object(o.b)("b",null,"201803280805 2002001 000000063773485")," (sem espa\xe7os)")),Object(o.b)("tr",null,Object(o.b)("td",null,"CHECKNUM"),Object(o.b)("td",{align:"left"},"Protocolo da transa\xe7\xe3o com 15 caracteres.",Object(o.b)("br",null),"Exemplo:",Object(o.b)("ul",null,Object(o.b)("li",null,"Protocolo: 63773485"),Object(o.b)("li",null,"CHECKNUM: ",Object(o.b)("b",null,"000000063773485"))))),Object(o.b)("tr",null,Object(o.b)("td",null,"REFNUM"),Object(o.b)("td",{align:"left"},"C\xf3digo de refer\xeancia da transa\xe7\xe3o. Deve conter sempre 22 caracteres, sendo:",Object(o.b)("br",null),Object(o.b)("br",null),"7 caracteres para o c\xf3digo da transa\xe7\xe3o",Object(o.b)("br",null),"15 caracteres para o n\xfamero da transa\xe7\xe3o (charge_id ou n\xfamero da cobran\xe7a)",Object(o.b)("br",null),Object(o.b)("br",null),"Este campo ser\xe1 exibido no arquivo OFX somente para as transa\xe7\xf5es associadas a uma confirma\xe7\xe3o de pagamento de Boleto ou de Cart\xe3o de Cr\xe9dito.")),Object(o.b)("tr",null,Object(o.b)("td",null,"MEMO"),Object(o.b)("td",{align:"left"},"Descri\xe7\xe3o da cobran\xe7a.")))),Object(o.b)("br",null),Object(o.b)("h3",{id:"ofx--bankmsgsrsv1--stmttrnrs--stmtrs--banktranlist--ledgerbal"},"OFX > BANKMSGSRSV1 > STMTTRNRS > STMTRS > BANKTRANLIST > LEDGERBAL"),Object(o.b)("table",null,Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Tag"),Object(o.b)("th",{align:"center"},"Descri\xe7\xe3o")),Object(o.b)("tr",null,Object(o.b)("td",null,"BALAMT"),Object(o.b)("td",null,"Representa o saldo parcial da conta no momento da transa\xe7\xe3o mais recente.",Object(o.b)("br",null),"Exemplos:",Object(o.b)("br",null),Object(o.b)("code",null,"1050.32"),",",Object(o.b)("code",null,"-223.95"))),Object(o.b)("tr",null,Object(o.b)("td",null,"DTASOF"),Object(o.b)("td",null,"Data de lan\xe7amento da transa\xe7\xe3o mais recente no formato.",Object(o.b)("br",null),"Formato: ",Object(o.b)("code",null,"yyyymmdd120000[-3:BRT]."))))),Object(o.b)("br",null),Object(o.b)("h3",{id:"tabela-com-a-rela\xe7\xe3o-de-todos-os-poss\xedveis-c\xf3digos-das-transa\xe7\xf5es-da-tag-fitid"},"Tabela com a rela\xe7\xe3o de todos os poss\xedveis C\xf3digos das Transa\xe7\xf5es da tag FITID"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"C\xf3digo da Transa\xe7\xe3o"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Descri\xe7\xe3o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002001"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Recebimento de cobran\xe7a boleto e l\xe2mina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001002"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa intermedia\xe7\xe3o cart\xe3o de cr\xe9dito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2001002"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno intermedia\xe7\xe3o cart\xe3o de cr\xe9dito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002002"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Recebimento de cobran\xe7a cart\xe3o de cr\xe9dito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002002"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Devolu\xe7\xe3o cart\xe3o de cr\xe9dito")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001001"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa intermedia\xe7\xe3o boleto e l\xe2mina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2009001"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"B\xf4nus intermedia\xe7\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1013001"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Devolu\xe7\xe3o boleto - D\xe9bito da devolu\xe7\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2013001"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Devolu\xe7\xe3o boleto - Cr\xe9dito da devolu\xe7\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002046"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Repasse pagamento marketplace boleto")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001046"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa repasse marketplace boleto")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002046"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Devolu\xe7\xe3o de repasse marketplace boleto")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002047"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Repasse pagamento marketplace cart\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001047"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa repasse marketplace cart\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002047"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Devolu\xe7\xe3o de repasse marketplace cart\xe3o")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1003004"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pagamento via c\xf3digo de barras")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001004"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa pagamento via c\xf3digo de barras")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002017"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno pagamento via c\xf3digo de barras - Estorno por parte do banco ou an\xe1lise")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002025"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pagamento via c\xf3digo de barras - D\xe9bito para sinalizar saldo insuficiente (agendamento)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002026"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno pagamento via c\xf3digo de barras - Cr\xe9dito para sinalizar saldo insuficiente (agendamento)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002003"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transfer\xeancia - Transfer\xeancia TED; ou entre contas Gerencianet; ou por e-mail")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001003"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa transfer\xeancia")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002016"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno transfer\xeancia - Estorno por parte do banco ou an\xe1lise")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002045"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno transfer\xeancia - Cr\xe9dito da transfer\xeancia cancelada pelo cliente")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2004003"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno transfer\xeancia - Cr\xe9dito da tarifa da transfer\xeancia cancelada pelo cliente")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002003"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transfer\xeancia entre contas Gerencianet - Cr\xe9dito da transfer\xeancia Gerencianet da conta destino")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1003021"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Recarga celular")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2004021"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Estorno recarga celular")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002044"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pagamento aprovado cart\xe3o, boleto e l\xe2mina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002044"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pagamento enviado cart\xe3o, boleto e l\xe2mina")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2002013"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cr\xe9dito manual")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1002013"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"D\xe9bito manual")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001048"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa de inatividade")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1001014"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Tarifa dep\xf3sito")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"status-da-fila-de-notifica\xe7\xf5es-callback"},"Status da fila de notifica\xe7\xf5es (callback)"),Object(o.b)("p",null,"A Gerencianet notifica os sistemas integrados a cada mudan\xe7a no status de uma determinada cobran\xe7a por meio de sua URL de notifica\xe7\xe3o associada."),Object(o.b)("p",null,"As notifica\xe7\xf5es s\xe3o processadas e enviadas sempre atrav\xe9s de uma fila de envios. Cabe ainda lembrar que, caso o callback seja rejeitado pelo sistema de destino, ele automaticamente retorna para a fila e \xe9 reagendado para uma nova tentativa de entrega. Os callbacks s\xe3o din\xe2micos e podem ocorrer ao longo de todo o dia."),Object(o.b)("p",null,"Pensando em oferecer novos meios de consultar o processamento desta fila, a Gerencianet disponibiliza uma tela que permite consultar o status de consumo da fila de notifica\xe7\xf5es (callbacks) processados at\xe9 ent\xe3o. Desta forma, caso o cliente esteja em d\xfavidas se um callback j\xe1 foi enviado ou n\xe3o, poder\xe1 acompanhar o processamento di\xe1rio desta fila."),Object(o.b)("p",null,"Para consultar o status e o processamento da fila, consulte o link ",Object(o.b)("a",{href:"https://gerencianet.com.br/confirmacoes/",target:"_blank",title:"Link Externo"},"status das confirma\xe7\xf5es de pagamentos - Gerencianet"),".")))}O.isMDXComponent=!0},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),T=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=T(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=T(a),d=n,m=s["".concat(b,".").concat(d)]||s[d]||O[d]||o;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<o;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},238:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},239:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(238),r=a(240);function o(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:o="/",url:b}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(r.a)(e))return e;const c=o+e.replace(/^\//,"");return a?b+c:c}},240:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},241:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},242:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},243:function(e,t,a){"use strict";var n=a(0),r=a(242);t.a=function(){return Object(n.useContext)(r.a)}},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(243),b=a(241),c=a(92),l=a.n(c);const i=37,T=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:s,groupId:O}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(o.a)(),[u,N]=Object(n.useState)(c);if(null!=O){const e=d[O];null!=e&&e!==u&&s.some(t=>t.value===e)&&N(e)}const j=e=>{N(e),null!=O&&m(O,e)},p=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:Object(b.a)("tabs__item",l.a.tabItem,{"tabs__item--active":u===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case T:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},245:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);