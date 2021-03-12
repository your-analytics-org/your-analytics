<script context="module" lang="ts">
  import type sapperCommon from "@sapper/common";
  import type { ISession } from "../stores/session";

  export async function preload(page: sapperCommon.Page, session: ISession) {
    const { user } = session;

    if (!user) {
      this.redirect(302, "auth");
      return;
    }

    return {};
  };
</script>

<script lang="ts">
  import Header from "../components/header/index.svelte";
  import MainContent from "../components/main-content.svelte";
</script>

<svelte:head>
  <title>Settings | Your Analytics</title>
</svelte:head>

<Header />
<MainContent>
  <div class="mt-10">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Billing</h3>
          <p class="mt-1 text-sm leading-5 text-gray-600">
            Configure your billing information.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        TODO: Include the Stripe form.
      </div>
    </div>
  </div>
</MainContent>