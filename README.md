# ASB UI KIT

ASB UI KIT — это библиотека UI-компонентов на базе React, разработанная с использованием TypeScript, Storybook, ESLint, Prettier и Vite. Цель данного проекта — упростить и стандартизировать создание UI в ваших React-приложениях, предоставляя набор готовых, переиспользуемых и типизированных компонентов.

## Возможности

- **React + TypeScript**: Полноценная типизация, повышенная надёжность.
- **Storybook**: Просмотр, тестирование и документирование компонентов в изолированной среде.
- **ESLint и Prettier**: Единый код-стайл и контроль качества кода.
- **Vite**: Быстрая сборка и удобный локальный дев-сервер.
- **Rollup/Vite build**: Сборка оптимизированной версии библиотеки для публикации в npm.

## Установка

Пока библиотека не опубликована, вы можете клонировать репозиторий и установить зависимости:

```bash
git clone https://github.com/your-username/my-ui-kit.git
cd my-ui-kit
yarn install
```


`yarn dev` — Запускает локальный дев-сервер Vite для разработки.

`yarn build` — Собирает библиотеку в папку dist в формате ES и CJS.

`yarn preview` — Позволяет просмотреть собранный билд локально.

`yarn storybook` — Запускает Storybook для просмотра и тестирования компонентов.

`yarn build-storybook` — Создаёт статическую сборку Storybook.

`yarn lint` — Запускает ESLint для проверки кода.

`yarn format` — Прогоняет Prettier для форматирования кода.

### Разработка новых компонентов

1. Создайте новую директорию для компонента в src/components. Например, для компонента Card:

```bash
mkdir src/components/Card
```

2. Создайте файл компонента Card.tsx:

```tsx
import React from 'react';

export type CardProps = {
  title: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '16px' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
```

3. Создайте Story для компонента Card.stories.tsx:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Example Card',
    children: 'Card content goes here',
  },
};
```

4. Просмотрите компонент в Storybook:

```bash
yarn storybook
```

5. Настройте линтер и форматирование: Перед коммитом убедитесь, что код соответствует стилю:

```bash
yarn lint
yarn format
```


### Публикация

Когда вы будете готовы опубликовать библиотеку в npm:

1. Обновите версию в package.json.

2. Выполните:

```bash
yarn build
yarn publish --access public
```

Убедитесь, что вы авторизованы под нужным аккаунтом npm.

### Структура проекта
```textmate
my-ui-kit/
├─ .storybook/
│  ├─ main.ts
│  ├─ preview.ts
├─ src/
│  ├─ components/
│  │  ├─ Button/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Button.stories.tsx
│  │  │  ├─ Button.test.tsx (опционально, если используете тесты)
│  │  │  └─ index.ts
│  │  └─ index.ts (реэкспорт всех компонентов)
│  ├─ index.ts (экспорт всей библиотеки)
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ .eslintrc.js
├─ .prettierrc
```