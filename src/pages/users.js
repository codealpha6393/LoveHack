import { svgIcon } from '../icons.js';
import { logout, state, updateProfileName } from '../state.js';

function accountStats() {
  return [
    { label: 'Saved workflows', value: state.workflows.length },
    { label: 'Executions tracked', value: state.execHistory.length },
    { label: 'Theme', value: state.theme === 'dark' ? 'Dark' : 'Light' },
  ];
}

export function renderUsersPage(container, navigate) {
  const user = state.currentUser;
  if (!user) {
    navigate('/login');
    return;
  }

  container.innerHTML = `
    <div class="users-page">
      <section class="marketing-section page-intro">
        <span class="eyebrow">Account</span>
        <h1>Hello, ${user.name}</h1>
        <p>This local account page lets users review session details, update their display name, and log out without leaving the product shell.</p>
      </section>

      <section class="account-grid marketing-section">
        <article class="marketing-card account-profile-card">
          <div class="account-avatar">${user.name.slice(0, 1).toUpperCase()}</div>
          <div class="account-profile-copy">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <span class="account-tag">Local demo account</span>
          </div>
        </article>

        <article class="marketing-card account-form-card">
          <h2>Update display name</h2>
          <form id="profile-form" class="account-form">
            <div class="form-field">
              <label for="profile-name">Display name</label>
              <input id="profile-name" class="input-text" value="${user.name}" />
            </div>
            <div class="form-feedback" id="profile-feedback" role="status" aria-live="polite"></div>
            <div class="account-actions">
              <button type="submit" class="btn btn-primary">${svgIcon('check')} Save changes</button>
              <button type="button" class="btn btn-secondary" id="logout-btn">${svgIcon('x')} Log out</button>
            </div>
          </form>
        </article>
      </section>

      <section class="marketing-section">
        <div class="marketing-grid three-col">
          ${accountStats()
            .map(
              (item) => `
                <article class="marketing-card account-stat-card">
                  <span class="eyebrow">${item.label}</span>
                  <strong>${item.value}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    </div>
  `;

  const form = container.querySelector('#profile-form');
  const feedback = container.querySelector('#profile-feedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = updateProfileName(container.querySelector('#profile-name').value);
    feedback.textContent = result.ok ? 'Profile updated.' : result.error;
    feedback.classList.toggle('error', !result.ok);
    feedback.classList.toggle('success', result.ok);
    if (result.ok) {
      container.querySelector('.account-avatar').textContent = state.currentUser.name.slice(0, 1).toUpperCase();
      container.querySelector('.account-profile-copy h2').textContent = state.currentUser.name;
    }
  });

  container.querySelector('#logout-btn').addEventListener('click', () => {
    logout();
    navigate('/login');
  });
}
