# File

<input type="file" />

- Usuário poderá escolher 1 ou mais arquivos para enviar no formulário

# Atributos

- value
    - Contém o arquivo a ser enviado
- accept
    - descreve que tipos de arquivos serão aceitos
    - exemplo: .doc, .docx, .pdf, audio/*, imagem/png, .png
- files 
    - a lista de arquivo ou arquivos

# Envio dos arquivos
Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"