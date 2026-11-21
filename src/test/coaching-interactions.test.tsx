import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Contact } from "@/components/site/Contact";
import { Navbar } from "@/components/site/Navbar";
import { Faq } from "@/components/site/Faq";
import { coach, packages, whatsappLink } from "@/data/site";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Coaching enquiry", () => {
  it.each(["", "audit@", "audit@example", "audit@example.com extra"])(
    "does not open WhatsApp for invalid email %s",
    (email) => {
      const open = vi.spyOn(window, "open").mockReturnValue(null);
      render(<Contact />);
      fireEvent.change(screen.getByLabelText("Full name"), { target: { value: "Audit Visitor" } });
      fireEvent.change(screen.getByLabelText("Email"), { target: { value: email } });
      fireEvent.click(screen.getByRole("button", { name: "Send via WhatsApp" }));
      expect(screen.getByRole("alert")).toBeVisible();
      expect(open).not.toHaveBeenCalled();
    },
  );

  it("rejects a whitespace-only name", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Full name"), { target: { value: "   " } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "audit@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Send via WhatsApp" }));
    expect(open).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toBeVisible();
  });

  it("opens the selected package enquiry with safely encoded visitor details", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Full name"), { target: { value: " Audit Visitor " } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "audit@example.com" } });
    fireEvent.change(screen.getByLabelText("Package"), { target: { value: "Elite 1-to-1" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Strength & nutrition + posing?" } });
    fireEvent.click(screen.getByRole("button", { name: "Send via WhatsApp" }));
    const expected = whatsappLink("Hi Coach! I'm Audit Visitor (audit@example.com).\nInterested in: Elite 1-to-1\nStrength & nutrition + posing?");
    expect(open).toHaveBeenCalledWith(expected, "_blank", "noopener");
    expect(new URL(expected).pathname).toBe(`/${coach.whatsapp}`);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("preserves the three published package amounts and durations", () => {
    expect(packages.map(({ name, price, period }) => ({ name, price, period }))).toEqual([
      { name: "Basic", price: "15,000", period: "4 Weeks" },
      { name: "Pro", price: "20,000", period: "4 Weeks" },
      { name: "Elite 1-to-1", price: "30,000", period: "4 Weeks" },
    ]);
  });
});

describe("Navigation and FAQ", () => {
  it("closes the menu on Escape and returns keyboard focus", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes the menu when the brand is activated", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole("link", { name: /IRONFORGE/ }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and closes an FAQ answer", () => {
    render(<Faq />);
    const question = screen.getByRole("button", { name: "How does online coaching work?" });
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(question);
    expect(question).toHaveAttribute("aria-expanded", "false");
  });
});