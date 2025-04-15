'use client'
import { ChevronUp } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-black text-white underline-link">
            <div className="w-full">
                <Button
                    variant="ghost"
                    className="bg.gray-800 w-full rounded-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ChevronUp className="w-6 h-6" />
                    Back to Top
                </Button>
            </div>
            <div className="p-4">
                <div className="flex justify-center gap-3 text-sm">
                    <Link href="/page/conditions-of-use">Conditions of Use</Link>
                    <Link href="/page/privacy-notice">Privacy Notice</Link>
                    <Link href="/page/help">Help</Link>
                </div>
                <div className="flex justify-center text-sm">
                    <p> © 2020-2025, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className="mt-8 flex justify-center text-sm text-gray-400">
                    1234 Main St, Anytown, USA 12345 | 1-800-123-4567
                </div>
            </div>
        </footer>
    )
}