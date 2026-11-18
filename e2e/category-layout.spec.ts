import { test, expect } from '@playwright/test';
import { baseSeed } from './fixtures';
import { installShim } from './shim';

test('wrapped category chips stay stationary and clickable on hover', async ({ page }) => {
  const seed = baseSeed('manager');
  seed.categories = ['写作', '编程', '学习', '解决问题', '问清问题', '未分类', '决策', '认识自己', '快捷命令'];
  seed.prompts = seed.categories.map((category, i) => ({
    id: `layout-${i}`, title: `测试条目-${i}`, content: '仅用于分类布局测试',
    category, tags: [], pinned: false, hotkey: '', useCount: 0, lastUsedAt: 0,
    createdAt: i + 1, updatedAt: i + 1,
  }));
  await installShim(page, seed);
  await page.goto('/');
  const chips = page.locator('.cat-row > button.chip');
  await expect(chips).toHaveCount(seed.categories.length + 2);

  for (const viewport of [{ width: 900, height: 640 }, { width: 1200, height: 800 }]) {
    await page.setViewportSize(viewport);
    await page.mouse.move(850, 20);
    const before = await chips.evaluateAll(nodes => nodes.map(node => {
      const r = node.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }));
    for (let i = 0; i < seed.categories.length; i++) {
      const chip = chips.nth(i + 1);
      await chip.hover();
      for (let sample = 0; sample < 3; sample++) {
        await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => resolve())));
        const after = await chips.evaluateAll(nodes => nodes.map(node => {
          const r = node.getBoundingClientRect();
          return { x: r.x, y: r.y, width: r.width, height: r.height };
        }));
        expect(after).toEqual(before);
      }
      await chip.click();
      await expect(chip).toHaveClass(/\bon\b/);
      await expect(page.locator('.pitem')).toHaveCount(1);
      await expect(page.locator('.pitem-title')).toHaveText(`测试条目-${i}`);
      await page.mouse.move(850, 20);
    }
  }
});
