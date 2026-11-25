import type { Metadata } from 'next';

export const metadata: Metadata = {
  "title": {
    "absolute": "Porcelain Tile Pallet Delivery Checklist | Falcor Surfaces"
  },
  "description": "Prepare for porcelain tile freight delivery. Confirm truck access, unloading arrangements, carton counts, and what to record when the pallet arrives.",
  "alternates": {
    "canonical": "/education/porcelain-tile-pallet-delivery/"
  }
};

export default function Page() {
  return (
    <article className="section falcor-guide">
      <div className="shell narrow">
        <nav aria-label="Breadcrumb"><a href="/education/">Porcelain tile planning guides</a></nav>
        <h1>Porcelain tile delivery: what to check before your pallet arrives</h1>
        <p>A tile order travels in cartons, but it often arrives as a pallet. Knowing the square footage is only the first part of planning the delivery. The truck needs an accessible stopping point, the recipient needs to know where the carrier will leave the freight, and someone needs the paperwork to check it in.</p>
        <figure><img src="/education/porcelain-tile-pallet-delivery.webp" alt="Illustration of cartons of tile secured to a pallet in a warehouse."/><figcaption>A wrapped pallet groups the cartons for transit. Check the shipment against its paperwork.</figcaption></figure>
        <h2>Before dispatch</h2>
        <p>Give the supplier the delivery ZIP code, site contact, and a phone number answered during receiving hours. Describe gates, low clearances, narrow streets, docks, and appointment requirements. Ask which service is booked, whether a liftgate is included if needed, and exactly where the driver is expected to unload. Arrange any onward movement into the building separately with the receiving team.</p>
        <h2>When the truck arrives</h2>
        <p>Have the order confirmation and packing list ready. Check the pallet count, carton labels, product name, size, finish, and visible condition. If wrap is torn, cartons are crushed, or pieces are visibly broken, photograph the affected area and the shipment label. Record the specific visible issue on the delivery receipt before signing, retain a copy, and follow the reporting instructions for your shipment promptly.</p>
        <h2>Reconcile the order before installation</h2>
        <p>If the paperwork lists 64 cartons at 16 square feet per carton, the expected coverage is 1,024 square feet. If you receive two pallets, verify their combined carton count. A pallet count by itself cannot establish how many cartons arrived. Set aside questionable cartons with their labels so the supplier can identify them.</p>
        <p>Read <a href="/delivery/">Falcor’s delivery guide</a>. For a delivery estimate, <a href="/request-quote/">request a project quote</a> with the quantity, destination, access details, and requested receiving date.</p>
      </div>
    </article>
  );
}
