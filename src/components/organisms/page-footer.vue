<script setup>
const footerColumns = [
  [
    {title: 'Полезные ссылки'},
    {title: 'Маркетплейс'},
    {title: 'Поставщикам'},
    {title: 'Заказчикам'},
    {title: 'Контакты'},
  ],
  [
    {title: 'Пользователям'},
    {title: 'Техническая поддержка'},
    {title: 'Обучающие материалы'},
    {title: 'Условия и тарифы'},
    {title: 'Акции'},
  ],
  [
    {title: 'Юридическая информация'},
    {title: 'Агентский договор'},
    {title: 'Соглашения об АСП'},
    {title: 'Политика обработки данных'},
    {title: 'Политика конфиденциальности'},
  ],
]
</script>

<template>
  <footer class="page-footer">
    <div class="page-footer__divider"></div>
    <div class="page-footer__grid four-column-grid">
      <div v-for="(column, idx) in footerColumns" class="page-footer__column" :key="idx">
        <div v-for="(item, index) in column" class="page-footer__link" :key="`${idx}-${index}`">
          {{item.title}}
        </div>
      </div>
      <div>
        © ООО «КОМПАНИЯ», 2022 Юр. адрес: Москва, Пушкина б-р, 1, оф. 123
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .page-footer {
    margin-top: 80px;
    padding: 56px 0 80px;
    font-size: 13px;
    color: var(--main-black);

    &__divider {
      height: 4px;
      width: 100vw;
      left: 50%;
      position: absolute;
      transform: translate(-50%);
      background-image: radial-gradient(circle, #D9D9D9 2px, transparent 2px);
      background-size: 10px 10px; /* Устанавливает расстояние между точками */
    }

    &__grid {
      margin-top: 56px;
      gap: 40px;
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: 16px;

    }

    &__link:first-child {
      font-weight: bold;
    }
  }
</style>