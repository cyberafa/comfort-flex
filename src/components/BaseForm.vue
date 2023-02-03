<template>
  <section id="cadastre-seu-cupom" class="section-form">
    <h2 class="alt-title">Cadastre seu cupom</h2>
    <div class="container">
      <form action="" method="post" enctype="multipart/form-data" id="form">
        <div class="form-grid">
          <input
            type="text"
            name="nome"
            class="nome"
            placeholder="Nome completo"
            required
          />
          <input
            type="text"
            name="CPF"
            class="cpf"
            maxlength="14"
            placeholder="CPF"
            required
            id="cpf"
          />
          <input
            type="tel"
            name="telefone"
            class="tel"
            placeholder="Telefone"
            required
            id="telefone"
          />
          <input
            type="email"
            name="email"
            class="email"
            placeholder="E-mail"
            required
          />
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            class="rua"
            required
          />
          <input
            type="text"
            name="numero"
            placeholder="Nº"
            class="numero"
            required
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            class="bairro"
            required
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            class="cidade"
            required
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            class="cep"
            required
            id="cep"
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            class="estado"
            required
          />
          <input
            type="text"
            name="data-compra"
            class="data-compra"
            maxlength="10"
            placeholder="Data da compra"
            required
            id="data"
          />
          <input
            type="text"
            name="numero-pares"
            placeholder="nº pares "
            class="numero-pares"
            required
          />
          <input
            type="text"
            name="nome-loja"
            class="nome-loja"
            placeholder="Nome da loja"
            required
          />
          <input
            type="text"
            name="cnpj-loja"
            class="cnpj-loja"
            maxlength="18"
            placeholder="CNPJ da loja"
            id="cnpj"
            required
          />
        </div>
        <div class="form-row">
          <div class="form-flex">
            <div class="attachment">
              <label for="cupom-fiscal" class="anexo">
                Anexe aqui seu cupom fiscal.
              </label>
              <input
                type="file"
                id="cupom-fiscal"
                name="cupom-fiscal"
                placeholder="Anexe aqui seu cupom fiscal"
                required
              />
            </div>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              minlength="6"
              maxlength="10"
              required
            />
          </div>
          <div class="send">
            <i class="senha">
              A senha deve ter de 6 a 10 caracteres, são permitidos os conjuntos
              de números, letras (maiúsculas minúsculas) e caracteres especiais.
            </i>
            <input type="submit" value="Enviar" class="btn -md" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup></script>
