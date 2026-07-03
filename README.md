# ambers-ui-kit 🧩

A React component library built with TypeScript and CSS Modules. Lightweight, accessible, and unopinionated — drop it into any React project.

## Installation

```bash
npm install ambers-ui-kit
```

## Components

### `Button`

Four variants, three sizes, loading state, and optional icon.

| Prop | Type | Default |
|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `loading` | `boolean` | `false` |
| `icon` | `React.ReactNode` | — |

```tsx
import { Button } from 'ambers-ui-kit'

<Button variant="primary" size="md" icon={<Star />}>
  Click Me
</Button>
<Button variant="outline" loading>
  Saving...
</Button>
```

---

### `Input`

Text input with label, error state, hint text, and optional icon slot.

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `error` | `string` | — |
| `hint` | `string` | — |
| `icon` | `React.ReactNode` | — |

Accepts all standard `<input>` attributes.

```tsx
import { Input } from 'ambers-ui-kit'

<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" error="Must be at least 8 characters" />
```

---

### `Textarea`

Stretchable textarea with the same label/error/hint pattern as `Input`.

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `error` | `string` | — |
| `hint` | `string` | — |
| `rows` | `number` | `4` |

Accepts all standard `<textarea>` attributes.

```tsx
import { Textarea } from 'ambers-ui-kit'

<Textarea label="Bio" rows={6} placeholder="Tell us about yourself..." />
```

---

### `Select`

Styled native `<select>` with placeholder support and shared form styling.

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `error` | `string` | — |
| `hint` | `string` | — |
| `options` | `{ value: string; label: string }[]` | required |
| `placeholder` | `string` | — |

```tsx
import { Select } from 'ambers-ui-kit'

<Select
  label="Role"
  options={[
    { value: 'dev', label: 'Developer' },
    { value: 'design', label: 'Designer' },
  ]}
  placeholder="Choose a role"
/>
```

---

### `Toggle`

CSS-only animated toggle with hidden checkbox for full keyboard accessibility.

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | required |

Accepts all standard `<input type="checkbox">` attributes.

```tsx
import { Toggle } from 'ambers-ui-kit'

<Toggle label="Dark Mode" checked={dark} onChange={(e) => setDark(e.target.checked)} />
```

---

### `Modal`

Portal-based modal with animated trace border entry, focus trap, overlay click-to-close, and Escape key handling.

| Prop | Type | Default |
|---|---|---|
| `open` | `boolean` | required |
| `onClose` | `() => void` | required |
| `title` | `string` | required |
| `children` | `React.ReactNode` | required |

```tsx
import { Modal } from 'ambers-ui-kit'

<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
  <p>Are you sure?</p>
</Modal>
```

---

### `Toast`

Lightweight toast system with `success`, `error`, and `info` types. Place `<ToastDisplay />` once at your app root.

```tsx
import { toast, ToastDisplay } from 'ambers-ui-kit'

// In your app layout:
function App() {
  return (
    <>
      <ToastDisplay />
      <YourApp />
    </>
  )
}

// Anywhere in your app:
toast.success('Saved!')
toast.error('Something went wrong')
toast.info('Heads up')
```

---

### `Tooltip`

Hover/focus tooltip with four positions. Uses a two-layer CSS approach (positioning + popIn animation).

| Prop | Type | Default |
|---|---|---|
| `text` | `string` | required |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `children` | `React.ReactNode` | required |

```tsx
import { Tooltip } from 'ambers-ui-kit'

<Tooltip text="Delete forever" position="bottom">
  <Button variant="ghost">×</Button>
</Tooltip>
```

## Development

```bash
git clone <repo-url>
cd ambers-ui-kit
npm install
npm run build
```

## License

MIT
