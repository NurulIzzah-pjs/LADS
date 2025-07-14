<?php
$directory = __DIR__ . '/assets/images/';
$baseURL = '/assets/images/';

$files = scandir($directory);

foreach ($files as $file) {
  $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));

  if (
    !in_array($file, ['.', '..', 'logo.png']) &&
    in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])
  ) {
    $filename = pathinfo($file, PATHINFO_FILENAME);
    $imageURL = $baseURL . $file;
    $alt = htmlspecialchars(ucwords(str_replace('_', ' ', $filename)));

    echo <<<HTML
<article class="flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white">
  <div class="relative w-full aspect-[3/4] bg-gray-100">
    <img src="$imageURL" alt="$alt" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
    <button type="button"
      class="absolute bottom-2 right-2 bg-white bg-opacity-90 text-sm rounded px-3 py-1 font-semibold border border-gray-300 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-[#a27c67]"
      onclick="downloadImage('$imageURL', '$filename')"
      aria-label="Download $alt">
      Download
    </button>
  </div>
</article>

HTML;
  }
}
?>
