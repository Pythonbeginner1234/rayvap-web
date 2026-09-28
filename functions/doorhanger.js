export async function onRequestGet(context) {
  const key = "doorhanger_scans";

  const current = parseInt(
    (await context.env.RVAP_ANALYTICS.get(key)) || "0",
    10
  );

  await context.env.RVAP_ANALYTICS.put(key, String(current + 1));

  return Response.redirect(
    new URL("/contact.html?src=doorhanger", context.request.url),
    302
  );
}
